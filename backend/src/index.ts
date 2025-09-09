import express from "express";
import dotenv from "dotenv";
import authRoutes from "../src/routes/auth";
import adminRoutes from "../src/routes/admin";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  })
);

app.use("/auth", authRoutes);
app.use("/admin", adminRoutes);

export default app;
