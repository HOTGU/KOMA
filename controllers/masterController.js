import Tour from "../models/Tour";
import Master from "../models/Master";
import routes from "../routes";

export const home = (req, res) => {
  res.render("home", { pageTitle: "Home" });
};

export const about = (req, res) => res.render("aboutMaster", { pageTitle: "about MASTER" });
