import express from "express";
import routes from "../routes";
import {
  userDetail,
  userEditProfile,
  userChangePassword,
  usersHome,
  userLogin,
  userLogout,
  search,
  userJoin
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.search, search);
userRouter.get(routes.usersHome, usersHome);
userRouter.get(routes.userJoin, userJoin);
userRouter.get(routes.userLogin, userLogin);
userRouter.get(routes.userLogout, userLogout);
userRouter.get(routes.userChangePassword, userChangePassword);
userRouter.get(routes.userDetail, userDetail);
userRouter.get(routes.userEditProfile, userEditProfile);

export default userRouter;
