const express = require("express");

const { userRouter } = require("./userRouter");
const { tasksRouter } = require("./tasksRouter");

const router = express.Router();

router.use("/user", userRouter);
router.use("/tasks", tasksRouter);

module.exports = { rootRouter: router };
