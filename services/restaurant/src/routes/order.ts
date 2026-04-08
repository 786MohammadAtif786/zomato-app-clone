import express from "express";
import { isAuth, isSeller } from "../middleware/isAuth.js"
import {
  createOrder,
  fetchOrderForPayment,
  fetchRestaurantOrders

} from "../controllers/order.js";

const router = express.Router();


router.post("/new", isAuth, createOrder);
router.get("/payment/:id", fetchOrderForPayment);
router.get(
  "/restaurant/:restaurantId",
  isAuth,
  isSeller,
  fetchRestaurantOrders
);

export default router;