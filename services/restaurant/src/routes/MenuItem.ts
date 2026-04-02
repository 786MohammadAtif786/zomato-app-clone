import express from "express";
import { isAuth, isSeller } from "../middleware/isAuth.js";
import {
  addMenuItem
} from "../controllers/MenuItem.js";
import uploadFile from "../middleware/multer.js";

const router = express.Router();

router.post("/new", isAuth, isSeller, uploadFile, addMenuItem);


export default router;