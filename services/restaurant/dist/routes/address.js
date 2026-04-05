import express from "express";
import { isAuth } from "../middleware/isAuth.js";
import { addAddress, } from "../controllers/address.js";
const router = express.Router();
router.post("/new", isAuth, addAddress);
export default router;
