const jwt = require("jsonwebtoken");
const SECRET = process.env.JWT_SECRET;

function userAuth(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(403).json({ message: `Authorization header missing` });
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, SECRET);
    req.userId = decoded.id;
    next();
  } catch (err) {
    return res.status(403).json({ message: "Invalid token or expired token" });
  }
}

module.exports = userAuth;
