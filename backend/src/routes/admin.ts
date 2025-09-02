import { Router, Request, Response } from "express";
import pool from "../config/db";
import bcrypt from "bcrypt";
import { verifyToken, checkRole } from "../middleware/authMiddleware";

const router = Router();

/**
 * GET /admin/users
 * Hanya admin bisa melihat semua user
 */
router.get(
  "/users",
  verifyToken,
  checkRole("admin"),
  async (_req: Request, res: Response) => {
    try {
      const result = await pool.query(
        "SELECT id, username, email, role, status FROM users"
      );
      res.json(result.rows);
    } catch (err) {
      console.error("Get users error:", err);
      res.status(500).json({ message: "Server error" });
    }
  }
);

/**
 * POST /admin/create-admin
 * Hanya admin bisa membuat admin baru
 */
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

      const hashedPassword = await bcrypt.hash(password, 10);

      const newAdmin = await pool.query(
        `INSERT INTO users (username, email, password, role, status)
         VALUES ($1, $2, $3, $4, $5)
         RETURNING id, username, email, role, status`,
        [username, email, hashedPassword, "admin", "active"]
      );

      res.status(201).json({
        message: "Admin created successfully",
        user: newAdmin.rows[0],
      });
    } catch (err: any) {
      console.error("Create admin error:", err);

      if (err.code === "23505") {
        return res
          .status(409)
          .json({ message: "Email or username already exists" });
      }

      res.status(500).json({ message: "Server error" });
    }
  }
);

/**
 * POST /admin/users
 * Admin bisa membuat user baru (default role = user)
 */
router.post(
  "/users",
  verifyToken,
  checkRole("admin"),
  async (req: Request, res: Response) => {
    try {
      const { username, email, password, role, status } = req.body;

      if (!username || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await pool.query(
        `INSERT INTO users (username, email, password, role, status)
         VALUES ($1, $2, $3, $4, $5)
         RETURNING id, username, email, role, status`,
        [username, email, hashedPassword, role || "user", status || "active"]
      );

      res.status(201).json({
        message: "User created successfully",
        user: newUser.rows[0],
      });
    } catch (err: any) {
      console.error("Create user error:", err);

      if (err.code === "23505") {
        return res
          .status(409)
          .json({ message: "Email or username already exists" });
      }

      res.status(500).json({ message: "Server error" });
    }
  }
);

/**
 * PUT /admin/users/:id
 * Admin bisa update role atau status user
 */
router.put(
  "/users/:id",
  verifyToken,
  checkRole("admin"),
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { username, role, status } = req.body;

      if (!username && !role && !status) {
        return res
          .status(400)
          .json({
            message:
              "At least one field (username, role or status) is required",
          });
      }

      const result = await pool.query(
        `UPDATE users
         SET username = COALESCE($1, username),
             role = COALESCE($2, role),
             status = COALESCE($3, status)
         WHERE id = $4
         RETURNING id, username, email, role, status`,
        [username, role, status, id]
      );

      if (result.rows.length === 0) {
        return res.status(404).json({ message: "User not found" });
      }

      res.json({ message: "User updated successfully", user: result.rows[0] });
    } catch (err) {
      console.error("Update user error:", err);
      res.status(500).json({ message: "Server error" });
    }
  }
);

/**
 * DELETE /admin/users/:id
 * Admin bisa hapus user
 */
router.delete(
  "/users/:id",
  verifyToken,
  checkRole("admin"),
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const result = await pool.query(
        "DELETE FROM users WHERE id = $1 RETURNING id, username, email",
        [id]
      );

      if (result.rows.length === 0) {
        return res.status(404).json({ message: "User not found" });
      }

      res.json({ message: "User deleted successfully", user: result.rows[0] });
    } catch (err) {
      console.error("Delete user error:", err);
      res.status(500).json({ message: "Server error" });
    }
  }
);

export default router;
