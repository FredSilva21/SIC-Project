const { User } = require("../models/index");
const { compareHash,createHash } = require("../middleware/bcrypt");
const { SignToken } = require("../middleware/jwt");

//Done
exports.register = async (req, res) => {
  const {name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      return res.status(400).json({
        error:
          "Missing fields. Name, Email and Password must be sended in the body request!",
      });
    }

    if (await User.findOne({ where: { email: email } })) {
      return res
        .status(400)
        .json({ error: "Already have an account with this email!" });
    }

    const hash = await createHash(password)

    const newUser = await User.create({
      name: name,
      email: email,
      password: hash,
    });

    return res.status(200).json({ success: "User created", user: newUser });
  } catch (error) {
    console.log(error)
    res.status(500).send({
      message: "Something went wrong. Plese try again later",
      details: error,
    });
  }
};

//Done
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({
        error:
          "Missing fields. Email and Password must be sended in the body request!",
      });
    }
    const user = await User.findOne({ where: { email: email } });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    console.log(user.password);
    console.log(password);

    const passwordIsValid = await compareHash(user.password, password);
    if (!passwordIsValid) {
      return res.status(400).json({ error: "Invalid password" });
    }

    const token = await SignToken(user);
    return res
      .status(200)
      .json({ success: "Login successful", token: token, user_id: user.id_user });
  } catch (error) {
    res.status(500).send({
      message: "Something went wrong. Plese try again later",
      details: error,
    });
  }
};