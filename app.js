import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import guideRouter from "./routers/guideRouter";
import routes from "./routes";
import { localsmiddleware } from "./middleware";

const app = express();

app.set("view engine", "pug");
app.set("views", [
  __dirname + "/views",
  __dirname + "/views/user",
  __dirname + "/views/guide"
]);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.use(localsmiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.guide, guideRouter);

export default app;
