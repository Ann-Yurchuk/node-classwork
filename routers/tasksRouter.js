const express = require("express");
const { validateBody } = require("../middlewares/validateBody");
const { tasksJoiSchema } = require("../utils/validation/validationSchemas");

const {
  getTasks,
  getTask,
  createTask,
  updateTask,
  removeTask,
} = require("../controllers/tasksControllers");

const router = express.Router();

router.route("/").get(getTasks).post(validateBody(tasksJoiSchema), createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(removeTask);

module.exports = { tasksRouter: router };
