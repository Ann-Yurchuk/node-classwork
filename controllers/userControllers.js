const bcrypt = require("bcryptjs");
const MiddlewareWrapper = require("../middlewares/middlewareWrapper");

const { User } = require("../models/User");
const { HttpError } = require("../utils/HttpError");

let userSignup = async (req, res, next) => {
  const { email, password, username } = req.body;
  const isEmailUnique = await User.findOne({ email });
  if (isEmailUnique) {
    throw new HttpError(409, "Email should be unique");
  }
  const hashedPass = await bcrypt.hash(password, 12);
  const newUser = await User.create({ username, email, password: hashedPass });
  newUser.password = undefined;
  res.status(201).json(newUser);
};
userSignup = MiddlewareWrapper(userSignup);

let userLogin = async (req, res, next) => {};
userLogin = MiddlewareWrapper(userLogin);

let userLogout = async (req, res, next) => {};
userLogout = MiddlewareWrapper(userLogout);

module.exports = { userSignup, userLogin, userLogout };
