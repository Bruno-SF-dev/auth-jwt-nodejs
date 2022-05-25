const routes = require("express").Router();

const authMiddleware = require("./middlewares/authMiddlewate");

const AuthenticateController = require("./controllers/AuthenticateController");
const CreateUserController = require("./controllers/CreateUserController");
const GetUserDataController = require("./controllers/GetUserDataController");

routes.post("/create-user", CreateUserController.handle);
routes.post("/auth", AuthenticateController.authenticate);
routes.post("/user-data", authMiddleware, GetUserDataController.handle);

module.exports = routes;
