import express from "express";
import routes from "../routes";
import { guestDetail, editProfile, changePassword } from "../controllers/guestController";
import { onlyPrivate } from "../middleware";

const guestRouter = express.Router();

guestRouter.get(routes.guestDetail(), guestDetail);
guestRouter.get(routes.editProfile, onlyPrivate, editProfile);
guestRouter.get(routes.changePassword, changePassword);

export default guestRouter;
