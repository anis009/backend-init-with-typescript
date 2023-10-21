import express, { NextFunction, Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";
import config from "./config";
import { bookRouter } from "./app/modules/Book/book.route";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import { NotFound } from "./app/middleware/notFound";
import router from "./routes";
import ApiError from "./errors/ApiError";
const app = express();

app.use(express.json());
app.use(cors());
if (config.node_env === "development") app.use(morgan("dev"));
app.get("/", (req: Request, res: Response) => {
	res.send("welcome");
});
app.use("/api/v1",router)
app.use((req:Request, res:Response, next:NextFunction) => {
	throw new ApiError(404,`Not Found ${req.originalUrl}`);
});
app.use(globalErrorHandler);


export default app;
