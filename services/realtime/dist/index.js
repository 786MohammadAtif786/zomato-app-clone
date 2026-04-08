import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import http from "http";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const server = http.createServer(app);
server.listen(process.env.PORT, () => {
    console.log(`Realtime service is running port ${process.env.PORT}`);
});
