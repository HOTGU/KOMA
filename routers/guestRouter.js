import express from "express";
import routes from "../routes";
import {
  guestDetail,
  getEditProfile,
  postEditProfile,
  getChangePassword,
  postChangePassword
} from "../controllers/guestController";
import { onlyPrivate, uploadAvatar } from "../middleware";

const guestRouter = express.Router();

guestRouter.get(routes.editProfile, onlyPrivate, getEditProfile);
guestRouter.post(routes.editProfile, onlyPrivate, uploadAvatar, postEditProfile);

guestRouter.get(routes.changePassword, onlyPrivate, getChangePassword);
guestRouter.post(routes.changePassword, onlyPrivate, postChangePassword);

guestRouter.get(routes.guestDetail(), guestDetail);

export default guestRouter;
