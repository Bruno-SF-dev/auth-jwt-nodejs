const User = require("../models/user");

class GetUserDataController {
  async handle(req, res) {
    const { userId } = req;

    try {
      const user = await User.findOne({ _id: userId });

      const userData = {
        id: user._id,
        name: user.name,
      };

      res.send({ userData });
    } catch (err) {
      return res.status(400).send({ error: "Failed to fetch data" });
    }
  }
}

module.exports = new GetUserDataController();
