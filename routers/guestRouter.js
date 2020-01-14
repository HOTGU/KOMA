import express from "express";
import routes from "../routes";
import {
  guestDetail,
  editProfile,
  changePassword
} from "../controllers/guestController";

const guestRouter = express.Router();

guestRouter.get(routes.guestDetail(), guestDetail);
guestRouter.get(routes.editProfile, editProfile);
guestRouter.get(routes.changePassword, changePassword);

export default guestRouter;
