// Global

const HOME = "/";

// Users

const USERS = "/users";
const USERS_HOME = "/users-home";
const USER_JOIN = "/join";
const USER_LOGIN = "/login";
const USER_LOGOUT = "/logout";
const USER_DETAIL = "/:id";
const SEARCH = "/search";
const USER_EDIT_PROFILE = "/edit-profile";
const USER_CHANGE_PASSWORD = "/change-password";

// Guide

const GUIDE = "/guide";
const GUIDE_HOME = "/guide-home";
const UPLOAD_TOUR = "/upload-tour";
const GUIDE_JOIN = "/join";
const GUIDE_LOGIN = "/login";
const GUIDE_LOGOUT = "/logout";
const TOUR_DETAIL = "/:id";
const EDIT_TOUR = "/:id/edit";
const DELETE_TOUR = "/:id/delete";

const routes = {
  home: HOME,
  userJoin: USER_JOIN,
  userLogin: USER_LOGIN,
  userLogout: USER_LOGOUT,
  search: SEARCH,
  users: USERS,
  usersHome: USERS_HOME,
  userDetail: USER_DETAIL,
  userEditProfile: USER_EDIT_PROFILE,
  userChangePassword: USER_CHANGE_PASSWORD,
  guide: GUIDE,
  guideHome: GUIDE_HOME,
  guideJoin: GUIDE_JOIN,
  guideLogin: GUIDE_LOGIN,
  guideLogout: GUIDE_LOGOUT,
  uploadTour: UPLOAD_TOUR,
  tourDetail: TOUR_DETAIL,
  editTour: EDIT_TOUR,
  deleteTour: DELETE_TOUR
};

export default routes;
