const jwt = require("jsonwebtoken");
const userModel = require("../DB/model/User");

const auth = () => {
  return async (req, res, next) => {
    try {
      const headerToken = req.headers["authorization"];

      if (!headerToken || headerToken == null || headerToken == undefined || !headerToken.startsWith(`${process.env.Bearerkey} `)) {
        res.json({ message: "header token error" });
      } else {
        const token = headerToken.split(" ")[1];

        if (!token || token == null || token == undefined || token.length < 1) {
          res.json({ message: "in-valid token " });
        } else {
          const decoded = jwt.verify(token, process.env.tokenSignature);

          const findUser = await userModel.findById(decoded.id).select("name  email ");
          if (!findUser) {
            res.json({ message: "in-valid loggin user " });
          } else {
            if (findUser) {
              req.user = findUser;
              next();
            } else {
              res.json({ message: "not auth user" });
            }
          }
        }
      }
    } catch (error) {
      res.json({ message: "catch error", error });
    }
  };
};

module.exports = {
  auth,
};
