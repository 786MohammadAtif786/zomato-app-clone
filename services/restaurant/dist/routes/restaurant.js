import express from "express";
import { isAuth, isSeller } from "../middleware/isAuth.js";
import { addRestraunt, fetchMyRestaurant } from "../controllers/restaurant.js";
import uploadFile from "../middleware/multer.js";
const router = express.Router();
router.post("/new", isAuth, isSeller, uploadFile, addRestraunt);
router.get("/my", isAuth, isSeller, fetchMyRestaurant);
export default router;
