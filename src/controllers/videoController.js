export const trending = (req, res) => {
  const videos = [
    {
      title: "First",
      rating: 5,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 59,
    },
    {
      title: "Second",
      rating: 5,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 59,
    },
    {
      title: "Third",
      rating: 5,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 59,
    },
  ];
  return res.render("home", { pageTitle: "Home", videos });
};
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
