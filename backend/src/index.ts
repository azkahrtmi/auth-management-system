import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth";
import adminRoutes from "./routes/admin";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  })
);

// route
app.use("/auth", authRoutes);
app.use("/admin", adminRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
