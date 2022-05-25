const User = require("../models/user");

class CreateUserController {
  async handle(req, res) {
    const { email } = req.body;

    try {
      const userExists = await User.findOne({ email });

      if (userExists) {
        return res.status(400).send({ error: "User already exists" });
      }

      const user = await User.create(req.body);

      user.password = undefined;

      return res.json({ user });
    } catch (err) {
      return res.status(400).send({ error: "Registration failed" });
    }
  }
}

module.exports = new CreateUserController();
