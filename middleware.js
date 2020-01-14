import multer from "multer";
import routes from "./routes";

const multerTour = multer({ dest: "uploads/tours" });

export const localsmiddleware = (req, res, next) => {
  res.locals.routes = routes;
  res.locals.siteName = "KOMA !";
  res.locals.user = {
    loggedUser: true,
    id: 1
  };
  next();
};

export const uploadTour = multerTour.single("imageFile");
