import express from "express";
import dotenv from "dotenv";
 import cors from "cors"
import connectDB from "./config/db.js";
import restaurantRoutes from "./routes/restaurant.js"
import itemRoutes from "./routes/MenuItem.js";
import cartRoute from "./routes/Cart.js";
import addressRoutes from "./routes/address.js";
import orderRoutes from "./routes/order.js";
import { connectRabbitMQ } from "./config/rabbitmq.js";


dotenv.config();
connectRabbitMQ();

const app = express();
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 3001;

app.use("/api/restaurant", restaurantRoutes);
app.use("/api/item", itemRoutes);
app.use("/api/cart", cartRoute);
app.use("/api/address", addressRoutes);
app.use("/api/order", orderRoutes);


app.listen(PORT, () => {
    console.log(`Restaurant service is running on ${PORT}`);
    connectDB()
})