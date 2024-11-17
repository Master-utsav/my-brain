import express, { Response, Request } from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./utils/db.config";
import userRoute from "./routes/user.route";


dotenv.config();
const app = express();
const PORT = process.env.PORT || 8001;

app.use(cors({
    origin: process.env.PUBLIC_FRONTEND_DOMAIN || "http://localhost:5173",
    optionsSuccessStatus: 200
}));
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send("Welcome to Course-Yuga");
});

app.use("/api/v1/user", userRoute);

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
