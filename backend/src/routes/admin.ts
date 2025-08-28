import { Router, Request, Response } from "express";
import pool from "../config/db";
import bcrypt from "bcrypt";
import { verifyToken, checkRole } from "../middleware/authMiddleware";

const router = Router();

// hanya admin bisa akses user list
router.get(
  "/users",
  verifyToken,
  checkRole("admin"),
  async (req: Request, res: Response) => {
    try {
      const result = await pool.query(
        "SELECT id, username, email, role, status FROM users"
      );
      res.json(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  }
);

// hanya admin bisa buat admin baru
router.post(
  "/create-admin",
  verifyToken,
  checkRole("admin"),
  async (req: Request, res: Response) => {
    try {
      const { username, email, password } = req.body;

      if (!username || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
      }

      // cek apakah email sudah ada
      const existingUser = await pool.query(
        "SELECT * FROM users WHERE email = $1",
        [email]
      );
      if (existingUser.rows.length > 0) {
        return res.status(400).json({ message: "Email already exists" });
      }

      // hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // simpan sebagai admin
      const newAdmin = await pool.query(
        "INSERT INTO users (username, email, password, role) VALUES ($1, $2, $3, $4) RETURNING id, username, email, role, status",
        [username, email, hashedPassword, "admin"]
      );

      res.status(201).json({
        message: "Admin created successfully",
        user: newAdmin.rows[0],
      });
    } catch (err) {
      console.error("Create admin error:", err);
      res.status(500).json({ message: "Server error" });
    }
  }
);

export default router;
