import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoute from "./router/auth.js"

dotenv.config();

const app = express();
app.use(express.json())

const PORT = process.env.PORT || 3000;

app.use("/api/auth", authRoute)

app.listen(PORT, () => {
    console.log(`Auth service is running on ${PORT}`);
    connectDB()
})