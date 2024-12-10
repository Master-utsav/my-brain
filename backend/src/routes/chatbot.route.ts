import express from "express"
import { handleAIChatBot } from "../controllers/chatbot/handleAIChatBot.controllers";
import { authenticateToken } from "../middleware/auth.middleware";

const chatRouter = express.Router();

chatRouter.post("/chat-bot" , authenticateToken ,handleAIChatBot);

export default chatRouter;