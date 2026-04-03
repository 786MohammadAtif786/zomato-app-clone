import express from "express";
import { isAuth } from "../middleware/isAuth.js";
import { addToCart, fetchMyCart, incrementCartItem } from "../controllers/Cart.js";
const router = express.Router();
router.post("/add", isAuth, addToCart);
router.get("/all", isAuth, fetchMyCart);
router.put("/inc", isAuth, incrementCartItem);
export default router;
