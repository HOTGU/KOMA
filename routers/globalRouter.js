import express from "express";
import routes from "../routes";
import { home, search } from "../controllers/guideController";
import { join, login, logout } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);

export default globalRouter;
