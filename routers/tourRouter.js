import express from "express";
import routes from "../routes";
import {
  tourDetail,
  tourDelete,
  getTourUpload,
  postTourUpload,
  tourList,
  search,
  getTourUploadInfo,
  postTourUploadInfo,
} from "../controllers/tourController";
import { imgUpload, goLogin } from "../middleware";

const tourRouter = express.Router();

tourRouter.get(routes.search, search);

tourRouter.get(routes.tourList, tourList);

tourRouter.get(routes.tourUploadInfo, goLogin, getTourUploadInfo);
tourRouter.post(routes.tourUploadInfo, postTourUploadInfo);

tourRouter.get(routes.tourUpload, getTourUpload);
tourRouter.post(routes.tourUpload, imgUpload, postTourUpload);

tourRouter.get(routes.tourDetail(), tourDetail);

tourRouter.get(routes.tourDelete, tourDelete);

export default tourRouter;
