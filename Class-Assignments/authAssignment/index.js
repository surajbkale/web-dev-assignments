const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "ilovekiara";

const app = express();
app.use(express.json());

const users = [];

// authMiddleware
function authmiddleware(req, res, next) {
  const { token } = req.headers["authorization"];

  const verifiedToken = jwt.verify({ token }, JWT_SECRET);

  if (!verifiedToken) {
    res.send({
      error: "Invalid Token",
    });
  }

  req.username = verifiedToken;
  next();
}

app.post("/signup", function (req, res) {
  const { username, password } = req.body;

  users.push({ username, password });

  res.send({
    message: "You are signed up",
  });
});

app.post("/signin", function (req, res) {
  const { username, password } = req.body;

  let foundUser = null;

  for (let i = 0; i < users.length; i++) {
    if (users[i].username === username && users[i].password === password) {
      const token = jwt.sign(
        {
          username,
        },
        JWT_SECRET
      );

      res.send({
        token,
      });
    } else {
      res.send({
        message: "Invalid Credientials",
      });
    }
  }
});

app.get("/me", authmiddleware, function (req, res) {
  const { username } = req.body;

  const userdata = null;

  for (let i = 0; i < users.length; i++) {
    if (users[i].username === username) {
      userdata = users[i];
    }
  }

  res.send({ userdata });
});

app.listen(3000);
