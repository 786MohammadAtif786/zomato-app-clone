import express from "express";
import { isAuth } from "../middleware/isAuth.js";
import {
  addToCart,

} from "../controllers/Cart.js";

const router = express.Router();

router.post("/add", isAuth, addToCart);


export default router;