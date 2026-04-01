import express from "express";
import { isAuth, isSeller } from "../middleware/isAuth.js";
import { addRestraunt, } from "../controllers/restaurant.js";
import uploadFile from "../middleware/multer.js";
const router = express.Router();
router.post("/new", isAuth, isSeller, uploadFile, addRestraunt);
export default router;
