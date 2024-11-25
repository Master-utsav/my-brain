import express from "express";
import { authenticateToken } from "../middleware/auth.middleware";
import { handleAddContentRequestFunction } from "../controllers/content/addContent.controllers";
import multer from "multer";
import { handleGetAllContentOfUserFunction } from "../controllers/content/getContent.controllers";

const storage = multer.memoryStorage();
export const upload = multer({ storage: storage });

const contentRoute = express.Router();

contentRoute.post("/add-content" , authenticateToken , upload.single("image") , handleAddContentRequestFunction)
contentRoute.get("/get-content" , authenticateToken , handleGetAllContentOfUserFunction)

export default contentRoute;