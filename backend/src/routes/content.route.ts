import express from "express";
import { authenticateToken } from "../middleware/auth.middleware";
import { handleAddContentRequestFunction } from "../controllers/content/addContent.controllers";
import multer from "multer";
import { handleGetAllContentOfUserFunction, handleShareableContentOfUserFunction } from "../controllers/content/getContent.controllers";
import { handleBookmarkCardFunction, handleDeleteCardFunction, handleIsShareableCardFunction } from "../controllers/content/contentCardHandlers.controllers";
import { handleEditContentRequestFunction } from "../controllers/content/editContent.controllers";
import { handleGetShareBundleFunction, handlePostShareBundleFunction } from "../controllers/content/getAndPostShareBundle.controllers";

const storage = multer.memoryStorage();
export const upload = multer({ storage: storage });

const contentRoute = express.Router();

contentRoute.post("/add-content" , authenticateToken , upload.single("image") , handleAddContentRequestFunction)
contentRoute.post("/edit-content/:cardId" , authenticateToken , upload.single("image") , handleEditContentRequestFunction);
contentRoute.get("/get-content" , authenticateToken , handleGetAllContentOfUserFunction)
contentRoute.get("/get-content/:cardId" , handleShareableContentOfUserFunction)

contentRoute.post("/delete/:cardId" , authenticateToken , handleDeleteCardFunction)
contentRoute.post("/bookmark/:cardId" , authenticateToken , handleBookmarkCardFunction)
contentRoute.post("/shareable/:cardId" , authenticateToken , handleIsShareableCardFunction)

contentRoute.post("/make-share-bundle", authenticateToken , handlePostShareBundleFunction);
contentRoute.get("/get-share-bundle/:id", handleGetShareBundleFunction);

export default contentRoute;