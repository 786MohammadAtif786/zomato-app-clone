import express from "express";
import dotenv from "dotenv";
// import cors from "cors"
import connectDB from "./config/db.js";
dotenv.config();
const app = express();
app.use(express.json());
// app.use(cors())
const PORT = process.env.PORT || 3001;
// app.use("/api/auth", authRoute)
app.listen(PORT, () => {
    console.log(`Auth service is running on ${PORT}`);
    connectDB();
});
