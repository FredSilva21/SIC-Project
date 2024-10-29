const { User } = require("../models/index");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Something went wrong. Plese try again later",
      details: error,
    });
  }
};
