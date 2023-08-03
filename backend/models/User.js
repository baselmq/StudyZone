const crypto = require("crypto");
const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const validator = require("validator");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please provide a username"],
    },
    email: {
      type: String,
      required: [true, "Please provide a email"],
      unique: true,
      match: [
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        "Please provide a valid email",
      ],
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
      minlength: 6,
      select: false, // we don't want to return password
    },
    role: {
      type: String,
    },

    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcryptjs.genSalt(10); //the higher the number the more secure
  this.password = await bcryptjs.hash(this.password, salt); //it will save the new password in the password field
  next(); //save the new password
});

UserSchema.methods.matchPasswords = async function (password) {
  return await bcryptjs.compare(password, this.password);
};

UserSchema.methods.getSignedToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

UserSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");
  //hashing the token
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.resetPasswordExpire = Date.now() + 10 * (60 * 1000); //10 minutes, 60 seconds, 1000 milliseconds,

  return resetToken;
};
// static signup method
UserSchema.statics.addUser = async function (username, email, password, role) {
  //validation
  if (!username || !email || !password || !role) {
    throw Error("All fields must be filled");
  }

  if (!validator.isEmail(email)) {
    throw Error("Email not valid");
  }

  if (!validator.isStrongPassword(password)) {
    throw Error("Password not Strong enough");
  }

  const exist = await this.findOne({ email });

  if (exist) {
    throw Error("Email Already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ username, email, password: hash, role });

  return user;
};

// static login method
UserSchema.statics.login = async function (email, password) {
  //validation
  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error("Incorrect email or password");
  }
  console.log(password);
  console.log(user.password);

  const match = await bcryptjs.compare(password, user.password);
  if (!match) {
    throw Error("Incorrect email or password");
  }

  return user;
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
