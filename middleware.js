import multer from "multer";
import routes from "./routes";

const multerTourPhotos = multer({ dest: "uploads/tours/" });
const multerAvatar = multer({ dest: "uploads/avatar/" });

export const localsmiddleware = (req, res, next) => {
  res.locals.routes = routes;
  res.locals.siteName = "KOMA !";
  res.locals.loggedUser = req.user || null;
  res.locals.env = process.env;
  next();
};

export const onlyPublic = (req, res, next) => {
  if (req.user) {
    res.redirect(routes.home);
  } else {
    next();
  }
};

export const onlyPrivate = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect(routes.home);
  }
};

export const goLogin = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    const url = req.originalUrl;
    res.redirect(`/login/?redirect=${url}`);
  }
};

export const imgUpload = multerTourPhotos.fields([{ name: "thumbnail" }, { name: "coursePhoto" }]);

export const uploadAvatar = multerAvatar.single("avatar");
