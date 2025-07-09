const jwt = require("jsonwebtoken");
const SECRET = process.env.JWT_SECRET;

function adminAuth(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(403).json({
      message: "Authorization header missing",
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, SECRET);
    req.adminId = decoded.id;
    next();
  } catch (err) {
    res.status(403).json({
      message: "Invalid or expired token",
    });
  }
}

module.exports = adminAuth;
