const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const redisClient = require("./redis");
const dotenv = require("dotenv");

const generateAccesToken = (userId) => {
  return jwt.sign(userId, process.env.SECRET_KEY, { expiresIn: "1800s" });
};

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token === null) {
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) res.sendStatus(403);
    req.user = user;
    next();
  });
};

module.exports = { generateAccesToken, authenticateToken };
