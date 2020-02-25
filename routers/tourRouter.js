import express from "express";
import routes from "../routes";
import { tourDetail, tourDelete, getTourUpload, postTourUpload } from "../controllers/tourController";
import { uploadTour } from "../middleware";

const tourRouter = express.Router();

tourRouter.get(routes.tourUpload, getTourUpload);
tourRouter.post(routes.tourUpload, uploadTour, postTourUpload);

tourRouter.get(routes.tourDetail(), tourDetail);

tourRouter.get(routes.tourDelete, tourDelete);

export default tourRouter;
