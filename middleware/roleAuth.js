const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env;

const getRole = (roles) => {
  return function (req, res, next) {
    if (req.method === "OPTIONS") {
      next();
    }
    try {
      const { authorization = "" } = req.headers;
      const token = authorization.split(" ")[1];
      if (!token) {
        return res.status(404).json({ message: "not authorization" });
      }
      const { roles } = jwt.verify(token, SECRET_KEY);
      console.log(roles);
    } catch (error) {
      return res.status(404).json({ message: "message.error" });
    }
  };
};
module.exports = getRole;
