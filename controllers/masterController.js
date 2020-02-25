import Tour from "../models/Tour";

export const home = async (req, res) => {
  try {
    const tours = await Tour.find({});
    res.render("home", { pageTitle: "home", tours });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "home", tours: [] });
  }
};

export const about = (req, res) => res.render("aboutMaster", { pageTitle: "about MASTER" });

export const masterJoin = (req, res) => res.render("masterJoin");
