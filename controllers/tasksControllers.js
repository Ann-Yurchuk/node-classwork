// const {
//   getAllService,
//   getByIdService,
//   createTaskService,
//   updateTaskService,
//   removeTaskService,
// } = require("../services/services");
const { HttpError } = require("../utils/HttpError");
const MiddlewareWrapper = require("../middlewares/middlewareWrapper");
const { middleWrapper } = require("../utils/tryCatchWrapper");
const { Task } = require("../models/Task");

let getTasks = async (req, res, next) => {
  const { page = 1, limit = 4, completed = [true, false] } = req.query;
  console.log(typeof completed);
  const skip = (page - 1) * limit;
  // const filter = {};
  // if (completed === "true") {
  //   filter.completed = true;
  // } else if (completed === "false") {
  //   filter.completed = false;
  // }
  // const tasks = await Task.find(filter).limit(limit).skip(skip);

  const tasks = await Task.find({ completed }).limit(limit).skip(skip);
  res.status(200).json(tasks);
};
getTasks = middleWrapper(getTasks);

let getTask = async (req, res, next) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  res.status(200).json(task);
};
getTask = middleWrapper(getTask);

let createTask = async (req, res, next) => {
  const { title, completed } = req.body;
  const createdTask = await Task.create({ title, completed });
  res.status(201).json(createdTask);
};
createTask = middleWrapper(createTask);

let updateTask = async (req, res, next) => {
  const { id } = req.params;
  const updatedTask = await Task.findByIdAndUpdate(id, req.body, { new: true });

  res.status(200).json(updatedTask);
};
updateTask = middleWrapper(updateTask);

let removeTask = async (req, res, next) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  // res.sendStatus(204);
  // throw new HttpError(510, "dwadawdawdawdawdawdawdawdaw");
  res.status(200).json({ id });
};
removeTask = middleWrapper(removeTask);

module.exports = { getTasks, getTask, createTask, updateTask, removeTask };
