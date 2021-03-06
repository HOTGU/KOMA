import passport from "passport";
import routes from "../routes";
import User from "../models/User";

export const aboutUs = (req, res) => {
  res.render("aboutUs", { pageTitle: "About Korealtrip" });
};

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};
export const postJoin = async (req, res, next) => {
  const {
    body: { country, name, email, password, password2 },
    file: { path },
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
        avatarUrl: path,
      });
      await User.register(user, password);
      next();
    } catch (error) {
      console.log(error);
      res.redirect(routes.home);
    }
  }
};

export const getLogin = (req, res) => {
  const {
    query: { redirect },
  } = req;
  if (redirect) {
    req.session.returnTo = redirect;
  } else {
    req.session.returnTo = req.header("Referer");
  }
  res.render("login", { pageTitle: "Login" });
};

export const postLogin = passport.authenticate("local", {
  successReturnToOrRedirect: routes.home,
  failureRedirect: routes.login,
  failureFlash: true,
});

export const postKakaoLogin = (req, res) => {
  res.redirect(routes.home);
};

export const logout = (req, res) => {
  req.logout();
  res.redirect(routes.home);
};

export const getMe = async (req, res) => {
  const user = await User.findById(req.user.id).populate("tours");
  console.log(user);
  res.render("guestDetail", { pageTitle: "ME", user });
};

export const guestDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const user = await User.findById(id).populate({
      path: "master",
      path: "tours",
    });
    res.render("guestDetail", { pageTitle: "Guest Detail", user });
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const getChangePassword = (req, res) => res.render("changePassword");

export const postChangePassword = async (req, res) => {
  const {
    body: { oldPassword, newPassword, newPassword1 },
  } = req;
  try {
    if (newPassword !== newPassword1) {
      res.status(400);
      res.redirect(`/guests/${routes.changePassword}`);
      return;
    }
    await req.user.changePassword(oldPassword, newPassword);
    res.redirect(routes.me);
  } catch (error) {
    res.redirect(`/guests/${routes.changePassword}`);
  }
};

export const getEditProfile = (req, res) => {
  res.render("editProfile", { pageTitle: "Update Profile" });
};

export const postEditProfile = async (req, res) => {
  const {
    body: { country, name, email },
    file,
  } = req;
  try {
    await User.findByIdAndUpdate(req.user.id, {
      country,
      name,
      email,
      avatarUrl: file ? file.path : req.user.avatarUrl,
    });
    res.redirect(routes.me);
  } catch (error) {
    res.redirect(routes.editProfile);
  }
};
