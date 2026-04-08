import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
connectDB();
app.listen(process.env.PORT, () => {
    console.log(`Rider service is running on port ${process.env.PORT}`);
});
