import express from "express";
import routes from "../routes";
import {
  guideJoin,
  uploadTour,
  tourDetail,
  deleteTour,
  guideHome,
  editTour,
  guideLogin,
  guideLogout
} from "../controllers/guideController";

const guideRouter = express.Router();

guideRouter.get(routes.guideHome, guideHome);
guideRouter.get(routes.uploadTour, uploadTour);
guideRouter.get(routes.guideJoin, guideJoin);
guideRouter.get(routes.guideLogin, guideLogin);
guideRouter.get(routes.guideLogout, guideLogout);
guideRouter.get(routes.tourDetail, tourDetail);
guideRouter.get(routes.editTour, editTour);
guideRouter.get(routes.deleteTour, deleteTour);

export default guideRouter;
