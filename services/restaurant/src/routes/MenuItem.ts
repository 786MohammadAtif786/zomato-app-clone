import express from "express";
import { isAuth, isSeller } from "../middleware/isAuth.js";
import {
  addMenuItem,
  getAllItems
} from "../controllers/MenuItem.js";
import uploadFile from "../middleware/multer.js";

const router = express.Router();

router.post("/new", isAuth, isSeller, uploadFile, addMenuItem);
router.get("/all/:id", isAuth, getAllItems);



export default router;