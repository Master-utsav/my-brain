import express from "express";
import { authenticateToken } from "../middleware/auth.middleware";
import { handleAddContentRequestFunction } from "../controllers/content/addContent.controllers";
import multer from "multer";

const storage = multer.memoryStorage();
export const upload = multer({ storage: storage });

const contentRoute = express.Router();

contentRoute.post("/add-content" , authenticateToken , upload.single("image") , handleAddContentRequestFunction)

export default contentRoute;