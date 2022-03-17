export const trending = (req, res) => res.render("home");
export const see = (req, res) => res.render("watch");
export const edit = (req, res) => {
  return res.render("edit");
};
export const search = (req, res) => {
  return res.render("search");
};
export const upload = (req, res) => {
  return res.render("upload");
};
export const deleteVideo = (req, res) => {
  return res.render("delete-video");
};
