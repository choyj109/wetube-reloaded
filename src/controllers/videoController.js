import Video from "../models/Video";

/*export const home = (req, res) => {
  Video.find({}, (error, videos) => {
    if(error){
      return res.render("server-render");
    } else {
      return res.render("home", { pageTitle: "Home", videos: [] });
    }
  });
*/

export const home = async (req, res) => {
  const video = await Video.find({});
  return res.render("home", { pageTitle: "Home", videos: [] });
};
export const watch = (req, res) => {
  const { id } = req.params;
  return res.render("watch", { pageTitle: `Watching` });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  return res.render("edit", { pageTitle: `Editing` });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  return res.redirect(`/videos/${id}`);
};
export const search = (req, res) => {
  return res.render("search", { pageTitle: "Search" });
};
export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};
export const postUpload = async (req, res) => {
  const { title, description, hashtags } = req.body;
  await Video.create({
    title,
    description,
    createdAt: Date.now(),
    hashtags: hashtags.split(",").map((word) => `#${word}`),
    meta: {
      views: 0,
      rating: 0,
    },
  });
  return res.redirect("/");
};
export const deleteVideo = (req, res) => {
  return res.render("delete-video");
};
