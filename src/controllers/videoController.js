export const trending = (req, res) => res.render("home", { pageTitle: "Home" });
export const see = (req, res) => res.render("watch", { pageTitle: "Watch" });
export const edit = (req, res) => {
  return res.render("edit", { pageTitle: "Edit" });
};
export const search = (req, res) => {
  return res.render("search", { pageTitle: "Search" });
};
export const upload = (req, res) => {
  return res.render("upload", { pageTitle: "Search" });
};
export const deleteVideo = (req, res) => {
  return res.render("delete-video");
};
