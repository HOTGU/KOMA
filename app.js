import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import routes from "./routes";
import { localsmiddleware } from "./middleware";
import globalRouter from "./routers/globalRouter";
import guestRouter from "./routers/guestRouter";
import masterRouter from "./routers/masterRouter";
import tourRouter from "./routers/tourRouter";

const app = express();

app.set("view engine", "pug");
app.set("views", [__dirname + "/views"]);
app.use("/uploads", express.static("uploads"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));
app.use("/static", express.static("static"));

app.use(localsmiddleware);

app.use(routes.home, globalRouter);
app.use(routes.guests, guestRouter);
app.use(routes.master, masterRouter);
app.use(routes.tour, tourRouter);

export default app;
