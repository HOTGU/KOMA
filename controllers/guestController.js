import passport from "passport";
import routes from "../routes";
import User from "../models/User";

export const search = (req, res) => res.render("search");

export const getJoin = (req, res) => res.render("join", { pageTitle: "Join" });

export const postJoin = async (req, res, next) => {
  const {
    body: { country, name, email, password, password2 },
    file: { path }
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    try {
      const user = await User({
        name,
        email,
        country,
        avatarUrl: path
      });
      await User.register(user, password);
      next();
    } catch (error) {
      console.log(error);
      res.redirect(routes.home);
    }
  }
};

export const getLogin = (req, res) => res.render("login", { pageTitle: "Login" });

export const postLogin = passport.authenticate("local", {
  failureRedirect: routes.login,
  successRedirect: routes.home
});

export const postKakaoLogin = (req, res) => {
  res.redirect(routes.home);
};

export const logout = (req, res) => {
  req.logout();
  res.redirect(routes.home);
};

export const getMe = (req, res) => {
  res.render("guestDetail", { pageTitle: "ME", user: req.user });
};

export const guestDetail = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const user = await User.findById(id);
    console.log(user);
    res.render("guestDetail", { pageTitle: "Guest Detail", user });
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const changePassword = (req, res) => res.render("changePassword");

export const editProfile = (req, res) => res.render("editProfile");
