import routes from "../routes";

export const search = (req, res) => res.render("search");

export const getJoin = (req, res) => res.render("join", { pageTitle: "Join" });

export const postJoin = (req, res) => {
  const {
    body: { country, name, email, password, password2 }
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    res.redirect(routes.home);
  }
};

export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Login" });

export const postLogin = (req, res) => {
  res.redirect(routes.home);
};

export const logout = (req, res) => {
  res.redirect(routes.home);
};

export const guestDetail = (req, res) => res.render("guestDetail");

export const changePassword = (req, res) => res.render("changePassword");

export const editProfile = (req, res) => res.render("editProfile");
