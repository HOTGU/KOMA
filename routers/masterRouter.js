import express from "express";
import routes from "../routes";
import { about } from "../controllers/masterController";
import { goLogin } from "../middleware";
const masterRouter = express.Router();

masterRouter.get(routes.about, about);

export default masterRouter;
