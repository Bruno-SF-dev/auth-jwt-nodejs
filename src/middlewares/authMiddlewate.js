const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization) {
    return response.status(401).json({
      error: true,
      code: "token.invalid",
      message: "Token not present.",
    });
  }

  const [, token] = authorization.split(" ");

  if (!token) {
    return response.status(401).json({
      error: true,
      code: "token.invalid",
      message: "Token not present.",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = decoded.id;

    return next();
  } catch (err) {
    return res
      .status(401)
      .json({ error: true, code: "token.invalid", message: "Token invalid." });
  }
}

module.exports = authMiddleware;
