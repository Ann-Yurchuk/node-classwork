const express = require("express");
const { validateBody } = require("../middlewares/validateBody");
const {
  userJoiSchema,
  userJoiSchemaLogin,
} = require("../utils/validation/validationSchemas");

const {
  userSignup,
  userLogin,
  userLogout,
} = require("../controllers/userControllers");

const router = express.Router();

router.route("/signup").post(validateBody(userJoiSchema), userSignup);
router.route("/login").post(validateBody(userJoiSchemaLogin), userLogin);
router.route("/logout").post(userLogout);

module.exports = { userRouter: router };
