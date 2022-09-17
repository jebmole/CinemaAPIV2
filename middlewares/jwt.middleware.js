const { validateToken } = require("../helpers/handler.jwt");

const jwtMiddleware = (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      throw new Error();
    }

    const token = req.headers.authorization.split(" ")[1];
    const data = validateToken(token);
    if (!data._id) {
      throw new Error();
    }

    next();
  } catch (error) {
    res.status(401).send({ error: "Token Invalido" });
  }
};

module.exports = jwtMiddleware;
