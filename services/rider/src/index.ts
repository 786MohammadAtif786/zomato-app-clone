import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.listen(process.env.PROT, () => {
    console.log(`Rider service is running on port ${process.env.PROT}`);
    
})