import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db.js";
import userRoutes from "./routes/userRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import { authenticateToken } from "./middleware/authMiddleware.js";

dotenv.config();
const app = express();

connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", userRoutes);
app.use("/api", authenticateToken, taskRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
