const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const User = db.users
module.exports = function (req, res, next) {
    let token = req.headers["x-access-token"];

    if (!token) {
      return res.status(403).send({ message: "No token is provided!" });
    }
  
    jwt.verify(token, config.secret, (err, decoded) => {
        console.log(decoded);
      if (err) {
        return res.status(401).send({ message: "Unauthorized!" });
      }
      req.userId = decoded.id;
      next();
    });
};
