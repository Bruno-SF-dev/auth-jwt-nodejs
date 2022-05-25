const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).send({ error: "No token provided" });
  }

  const [, token] = authorization.split(" ");

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).send({ error: "Token invalid" });

    req.userId = decoded.id;

    return next();
  });
}

module.exports = authMiddleware;
