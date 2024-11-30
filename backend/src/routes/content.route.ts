import express from "express";
import { authenticateToken } from "../middleware/auth.middleware";
import { handleAddContentRequestFunction } from "../controllers/content/addContent.controllers";
import multer from "multer";
import { handleGetAllContentOfUserFunction } from "../controllers/content/getContent.controllers";
import { handleBookmarkCardFunction, handleDeleteCardFunction } from "../controllers/content/contentCardHandlers.controllers";

const storage = multer.memoryStorage();
export const upload = multer({ storage: storage });

const contentRoute = express.Router();

contentRoute.post("/add-content" , authenticateToken , upload.single("image") , handleAddContentRequestFunction)
contentRoute.get("/get-content" , authenticateToken , handleGetAllContentOfUserFunction)

contentRoute.post("/delete/:cardId" , authenticateToken , handleDeleteCardFunction)
contentRoute.post("/bookmark/:cardId" , authenticateToken , handleBookmarkCardFunction)

export default contentRoute;