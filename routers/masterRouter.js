import express from "express";
import routes from "../routes";
import { masterJoin, about } from "../controllers/masterController";
const masterRouter = express.Router();

masterRouter.get(routes.masterJoin, masterJoin);
masterRouter.get(routes.about, about);

export default masterRouter;
