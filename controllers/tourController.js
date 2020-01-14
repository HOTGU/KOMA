import Tour from "../models/Tour";
import routes from "../routes";

export const getTourUpload = (req, res) => res.render("tourUpload");

export const postTourUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path }
  } = req;
  const newTour = await Tour.create({
    imageUrl: path,
    title,
    description
  });
  console.log(newTour);
  res.redirect(routes.tourDetail(newTour.id));
};

export const tourDetail = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const tour = await Tour.findById(id);
    console.log(tour);
    res.render("tourDetail", { pageTitle: "Video detail", tour });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const tourDelete = (req, res) => res.render("tourDelete");
