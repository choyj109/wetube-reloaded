import express from "express";

const PORT = 4000;

const app = express();

const handelHome = (req, res) => {
  return res.send("Home");
};

const handelLogin = (req, res) => {
  return res.send("Login");
};

app.get("/", handelHome);
app.get("/login", handelLogin);

const handleListening = () =>
  console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
