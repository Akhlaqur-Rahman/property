// backend/server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import propertyRoutes from "./routes/propertyRoutes.js";
import { connectDB } from "./config/db.js";

dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json({ limit: "5mb" }));

// Connect DB


await connectDB();

// Routes
app.use("/api/properties", propertyRoutes);

// Health
app.get("/", (req, res) => res.send("Property backend is running"));

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));