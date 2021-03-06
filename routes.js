// Global

const HOME = "/";
const ABOUT_US = "/about-us";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";

// Guests

const GUESTS = "/guests";
const GUEST_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";
const ME = "/me";

// Master

const MASTER = "/master";
const ABOUT = "/about";
const MASTER_JOIN = "/join";
const MASTER_DETAIL = "/:id";

// Tour

const TOUR = "/tour";
const SEARCH = "/search";
const TOUR_LIST = "/list";
const TOUR_UPLOAD = "/upload";
const TOUR_DETAIL = "/:id";
const TOUR_DELETE = "/:id/delete";
const TOUR_UPLOAD_INFO = "/upload/info";

const KAKAO = "/auth/kakao";
const KAKAO_CALLBACK = "/auth/kakao/callback";

const routes = {
  home: HOME,
  aboutUs: ABOUT_US,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  guests: GUESTS,
  guestDetail: (id) => {
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
  masterDetail: (id) => {
    if (id) {
      return `/master/${id}`;
    } else {
      return MASTER_DETAIL;
    }
  },
  tour: TOUR,
  search: SEARCH,
  tourList: TOUR_LIST,
  tourUpload: TOUR_UPLOAD,
  tourUploadInfo: TOUR_UPLOAD_INFO,
  tourDetail: (id) => {
    if (id) {
      return `/tour/${id}`;
    } else {
      return TOUR_DETAIL;
    }
  },
  tourDelete: TOUR_DELETE,
  kakao: KAKAO,
  kakaoCallback: KAKAO_CALLBACK,
  me: ME,
};

export default routes;
