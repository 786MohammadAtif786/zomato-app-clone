import express from "express";
import { isAuth, isSeller } from "../middleware/isAuth.js";
import {
  addMenuItem,
  getAllItems,
  deleteMenuItem
} from "../controllers/MenuItem.js";
import uploadFile from "../middleware/multer.js";

const router = express.Router();

router.post("/new", isAuth, isSeller, uploadFile, addMenuItem);
router.get("/all/:id", isAuth, getAllItems);
router.delete("/:itemId", isAuth, isSeller, deleteMenuItem);



export default router;