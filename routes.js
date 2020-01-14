// Global

const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// Guests

const GUESTS = "/guests";
const GUEST_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

// Master

const MASTER = "/master";
const ABOUT = "/about";
const MASTER_JOIN = "/join";
const MASTER_DETAIL = "/:id";

// Tour

const TOUR = "/tour";
const TOUR_UPLOAD = "/upload";
const TOUR_DETAIL = "/:id";
const TOUR_DELETE = "/:id/delete";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  guests: GUESTS,
  guestDetail: id => {
    if (id) {
      return `/guests/${id}`;
    } else {
      return GUEST_DETAIL;
    }
  },
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  master: MASTER,
  about: ABOUT,
  masterJoin: MASTER_JOIN,
  masterDetail: id => {
    if (id) {
      return `/master/${id}`;
    } else {
      return MASTER_DETAIL;
    }
  },
  tour: TOUR,
  tourUpload: TOUR_UPLOAD,
  tourDetail: id => {
    if (id) {
      return `/tour/${id}`;
    } else {
      return TOUR_DETAIL;
    }
  },
  tourDelete: TOUR_DELETE
};

export default routes;
