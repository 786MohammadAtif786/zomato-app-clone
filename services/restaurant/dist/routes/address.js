import express from "express";
import { isAuth } from "../middleware/isAuth.js";
import { addAddress, deleteAddress, } from "../controllers/address.js";
const router = express.Router();
router.post("/new", isAuth, addAddress);
router.delete("/:id", isAuth, deleteAddress);
export default router;
