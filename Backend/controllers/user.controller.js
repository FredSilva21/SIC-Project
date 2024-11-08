const { User } = require("../models/index");

exports.getUsers= async (req, res) => {
  try {
    const users = await User.findAll();
    return res.status(200).json({success: true, result: users});
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Something went wrong. Plese try again later",
      details: error,
    });
  }
}

exports.getUser = async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.params.id } });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.status(200).json({ success: true, result: user });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Something went wrong. Plese try again later",
      details: error,
    });
  }
}