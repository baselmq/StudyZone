const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const sendEmail = require("../utils/sendEmail");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "3d" });
};

// ----------------- login -----------------
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    // create token
    const token = createToken(user._id);

    res
      .status(200)
      .json({ status: "success", username: user.username, email, token });
  } catch (error) {
    res.status(400).json({ status: "fail", error: error.message });
  }
};

// ----------------- register -----------------
exports.signupUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = await User.addUser(username, email, password);

    // create token
    const token = createToken(user._id);

    res.status(200).json({
      status: "success",
      data: {
        user,
      },
      token,
    });
  } catch (error) {
    res.status(400).json({ status: "fail", error: error.message });
  }
};

// ----------------- Forgot Password -----------------
exports.forgotPassword = async (req, res, next) => {
  const { email } = req.body;
  try {
    const user = await User.forgot(email);

    const resetToken = user.getResetPasswordToken();
    await user.save();

    //The link which will be sent by email
    const resetUrl = `http://localhost:3000/passwordreset/${resetToken}`;
    const message = `<h1>You have requested a password reset</h1>
                     <p>Please go to this link to reset your password</p>
                     <a href=${resetUrl} clicktracking=off> ${resetUrl}</a>`;

    try {
      await sendEmail({
        to: user.email,
        subject: "Password Reset Request",
        text: message,
      });
      res.status(200).json({ success: true, data: "Email Sent" });
    } catch (error) {
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;

      await user.save();
      res.status(400).json({ status: "fail", error: error.message });
    }
  } catch (error) {
    next(error);
  }
};

// ----------------- reset password route -----------------
exports.resetPassword = async (req, res, next) => {
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.resetToken)
    .digest("hex");

  try {
    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });
    if (!user) {
      return next(new ErrorResponse("Invalid Reset Token", 400));
    }
    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();

    res.status(201).json({
      success: true,
      data: "Password Reset Success",
    });
  } catch (error) {
    res.status(400).json({ status: "fail", error: error.message });
  }
};
