import Tour from "../models/Tour";
import routes from "../routes";

export const search = async (req, res) => {
  const {
    query: { searchingConcept, searchingLanguage },
  } = req;
  console.log(searchingConcept, searchingLanguage);
  let tours = [];
  try {
    if (searchingConcept && searchingLanguage) {
      tours = await Tour.find({
        $and: [{ concept: { $all: searchingConcept } }, { hostLanguage: searchingLanguage }],
      }).populate("creator");
    } else if (searchingConcept || searchingLanguage) {
      if (searchingConcept) {
        tours = await Tour.find({
          concept: { $all: searchingConcept },
        }).populate("creator");
      }
      if (searchingLanguage) {
        tours = await Tour.find({
          hostLanguage: searchingLanguage,
        }).populate("creator");
      }
    } else {
      console.log("No found");
    }
  } catch (error) {
    console.log(error);
  }
  res.render("search", { pageTitle: "Search", tours });
};

export const tourList = async (req, res) => {
  try {
    const tours = await Tour.find({}).populate("creator");
    res.render("tourList", { pageTitle: "Tour-List", tours });
  } catch (error) {
    console.log(error);
    res.redirect(routse.home);
  }
};

export const getTourUpload = (req, res) => res.render("tourUpload");

export const postTourUpload = async (req, res) => {
  const {
    body: { hostLanguage, hostself, title, description, concept, courseText },
    files: { thumbnail, coursePhoto },
  } = req;
  try {
    if (thumbnail === undefined || coursePhoto === undefined) {
      res.redirect(`/tour${routes.tourUpload}`);
    } else {
      const thumbnailPath = thumbnail[0].path;
      let photoListPath = new Array();
      for (var i = 0; i < coursePhoto.length; i++) {
        photoListPath.push(coursePhoto[i].path);
      }
      const newTour = await Tour.create({
        hostLanguage,
        hostself,
        thumbnailUrl: thumbnailPath,
        coursePhotos: photoListPath,
        courseText,
        title,
        description,
        concept,
        creator: req.user.id,
      });
      req.user.tours.push(newTour.id);
      req.user.save();
      res.redirect(routes.tourDetail(newTour.id));
    }
  } catch (error) {
    console.log(error);
  }
};

export const tourDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const tour = await Tour.findById(id).populate("creator");
    console.log(tour);
    res.render("tourDetail", { pageTitle: "Tour Detail", tour });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const tourDelete = (req, res) => res.render("tourDelete");
