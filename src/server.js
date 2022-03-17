import express from "express";

const PORT = 4000;

const app = express();

const gossipMiddleware = (req, res, next) => {
  console.log(`Someone is going to: ${req.url}`);
  next();
};

const handelHome = (req, res) => {
  return res.send("Home");
};

const handelLogin = (req, res) => {
  return res.send("Login");
};

app.get("/", gossipMiddleware, handelHome);
app.get("/login", handelLogin);

const handleListening = () =>
  console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
