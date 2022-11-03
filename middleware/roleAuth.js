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
      const { roles: userRoles } = jwt.verify(token, SECRET_KEY);
      let hasRole = false;
      userRoles.forEach((role) => {
        if (roles.includes(role)) {
          hasRole = true;
          }
          if (!hasRole) {
            return res.status(404).json({ message: "you has not ACCESS" });  
          }
      });
      console.log(roles);
      next();
    } catch (error) {
      return res.status(404).json({ message: "message.error" });
    }
  };
};
module.exports = getRole;
