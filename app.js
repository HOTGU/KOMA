import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import passport from "passport";
import mongoose from "mongoose";
import session from "express-session";
import MongoStore from "connect-mongo";
import routes from "./routes";
import { localsmiddleware } from "./middleware";
import globalRouter from "./routers/globalRouter";
import guestRouter from "./routers/guestRouter";
import masterRouter from "./routers/masterRouter";
import tourRouter from "./routers/tourRouter";

import "./passport";

const app = express();

const CookieStore = MongoStore(session);

app.use(helmet());
app.set("view engine", "pug");
// app.set("views", [__dirname + "/views"]);
app.use("/static", express.static("static"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: false,
    store: new CookieStore({ mongooseConnection: mongoose.connection }),
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use("/uploads", express.static("uploads"));

app.use(localsmiddleware);

app.use(routes.home, globalRouter);
app.use(routes.tour, tourRouter);
app.use(routes.guests, guestRouter);
app.use(routes.master, masterRouter);

export default app;
