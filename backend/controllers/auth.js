const crypto = require("crypto");
const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");
const sendEmail = require("../utils/sendEmail");

//register route
exports.register = async (req, res, next) => {
  console.log("Received registration request with data:");
  console.log("Username:", req.body.username);
  console.log("Email:", req.body.email);
  console.log("Password:", req.body.password);
  const { username, email, password } = req.body;
  try {
    const user = await User.create({
      username,
      email,
      password,
    });
    sendToken(user, 201, res);
  } catch (error) {
    next(error);
  }
};

//login route
exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorResponse("Please provide an email and password", 400));
  }
  try {
    const user = await User.findOne({ email }).select("+password");
    //checking the email
    if (!user) {
      return next(new ErrorResponse("Invalid credentials", 401));
    }
    //checking the password
    const isMatch = await user.matchPasswords(password);
    if (!isMatch) {
      return next(new ErrorResponse("Invalid credentials", 401));
    }

    sendToken(user, 201, res);
  } catch (error) {
    next(error);
  }
};

//forgotpassword route
exports.forgotpassword = async (req, res, next) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return next(new ErrorResponse("Email could not be sent", 404));
    }
    const resetToken = user.getResetPasswordToken();
    await user.save();

    //The link which will be sent by email
    const resetUrl = `http://localhost:3000/passwordreset/${resetToken}`;
    const message = `
<h1>You have requested a password reset</h1>
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
      return next(new ErrorResponse("Email could not be send", 500));
    }
  } catch (error) {
    next(error);
  }
};

//resetpassword route
exports.resetpassword = async (req, res, next) => {
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
      // token: user.getSignedToken(),
    });
  } catch (error) {
    next(error);
  }
};

const sendToken = (user, ststusCode, res) => {
  // const token = user.getSignedJwtToken();
  const token = user.getSignedToken();
  res.status(ststusCode).json({
    success: true,
    token: token,
  });
};
