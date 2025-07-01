function userMiddleware(req, res, next) {
  const token = req.headers.authorization;
  if (!token || token != "secret-token") {
    return res.status(401).json({ error: "Unauthoried access" });
  }

  next();
}

module.exports = userMiddleware;
