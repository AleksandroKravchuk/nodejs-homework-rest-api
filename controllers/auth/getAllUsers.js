// const { nanoid } = require("nanoid");
// const bcrypt = require("bcrypt");
// const gravatar = require("gravatar");
const { Role, User } = require("../../service");
const { RequestError, sendEmail, createVerifyEmail } = require("../../helpers");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      code: 200,
      status: "success",
      users,
    });
  } catch (error) {
    console.log(error);
  }
  //   const { email, password, subscription } = req.body;
  //   const hashPassword = await bcrypt.hash(password, 10);

  //   const user = await User.findOne({ email });
  //   if (user) {
  //     throw RequestError(409, "Email in use");
  //   } else {
  //     const secureUrl = gravatar.url(
  //       email,
  //       { s: "100", r: "x", d: "retro" },
  //       true
  //     );
  //     const verificationToken = nanoid();
  //     const newUser = await User.create({
  //       email,
  //       password: hashPassword,
  //       subscription,
  //       avatarURL: secureUrl,
  //       verificationToken,
  //     });
  //     const mail = createVerifyEmail(email, verificationToken);
  //     await sendEmail(mail);
  //     res.status(201).json({
  //       code: 201,
  //       status: "success",
  //       user: {
  //         email: newUser.email,
  //         subscription: newUser.subscription,
  //         avatarURL: newUser.avatarURL,
  //       },
  //     });
  //   }
};
module.exports = getAllUsers;
