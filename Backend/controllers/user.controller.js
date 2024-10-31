const { User } = require("../models/index");


exports.getUser = async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.params.id } });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Something went wrong. Plese try again later",
      details: error,
    });
  }
}