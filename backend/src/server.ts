import express, { Response, Request } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./utils/db.config";
import userRoute from "./routes/user.route";
import contentRoute from "./routes/content.route";
import chatRouter from "./routes/chatbot.route";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8001;

app.use(
  cors({
    origin: process.env.PUBLIC_FRONTEND_DOMAIN || "http://localhost:5173",
    optionsSuccessStatus: 200,
  })
);
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to my-brain");
});

app.use("/api/v1/user", userRoute);
app.use("/api/v1/content", contentRoute);
app.use("/api/v1/ai", chatRouter);

async function startServer() {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log("Server started on port: " + PORT);
    });
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    process.exit(1);
  }
}

startServer();

process.on("SIGINT", () => {
  console.log("Server is shutting down...");
  process.exit();
});

export default app;
