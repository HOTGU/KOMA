export const home = (req, res) => res.render("home", { pageTitle: "home" });

export const guideHome = (req, res) => res.render("guideHome");

export const guideJoin = (req, res) => res.render("guideJoin");

export const guideLogin = (req, res) => res.render("guideLogin");

export const guideLogout = (req, res) => res.render("guideLogout");

export const uploadTour = (req, res) => res.render("uploadTour");

export const tourDetail = (req, res) => res.render("tourDetail");

export const editTour = (req, res) => res.render("editTour");

export const deleteTour = (req, res) => res.render("deleteTour");
