const User = require("../models/user");

class GetUserDataController {
  async handle(req, res) {
    const { userId } = req;

    const user = await User.findOne({ _id: userId });

    const userData = {
      id: user._id,
      name: user.name,
    };

    res.send({ userData });
  }
}

module.exports = new GetUserDataController();
