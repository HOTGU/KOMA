import express from "express";
import routes from "../routes";
import passport from "passport";
import {
  logout,
  search,
  getJoin,
  postJoin,
  postLogin,
  getLogin,
  postKakaoLogin,
  kakaoLogin,
  getMe,
  meText
} from "../controllers/guestController";
import { home } from "../controllers/masterController";
import { onlyPublic, onlyPrivate, uploadAvatar } from "../middleware";

const globalRouter = express.Router();

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, uploadAvatar, postJoin, postLogin);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.logout, onlyPrivate, logout);

globalRouter.get(routes.search, search);

globalRouter.get(routes.me, getMe);

export default globalRouter;
