// const fs = require("fs/promises");
// const path = require("path");
// const taskPath = path.resolve(__dirname, "..", "db", "tasks.json");
// const crypto = require("crypto");

// const getAllService = async () => {
//   const rawData = await fs.readFile(taskPath, "utf-8");
//   return JSON.parse(rawData);
// };

// const getByIdService = async (id) => {
//   const tasksList = await getAllService();
//   return tasksList.find((task) => String(task.id) === String(id));
// };

// const createTaskService = async (title, completed) => {
//   const id = crypto.randomUUID();
//   const tasksList = await getAllService();
//   const newTask = { id, title, completed };
//   tasksList.push(newTask);
//   await fs.writeFile(taskPath, JSON.stringify(tasksList, null, 4));
//   return newTask;
// };

// const updateTaskService = async (id, body) => {
//   const tasksList = await getAllService();
//   const task = tasksList.find((task) => String(task.id) === String(id));
//   task.title = body.title || task.title;
//   task.completed = body.completed || task.completed;
//   await fs.writeFile(taskPath, JSON.stringify(tasksList, null, 4));
//   return task;
// };

// const removeTaskService = async (id) => {
//   const tasksList = await getAllService();
//   const newTaskList = tasksList.filter(
//     (task) => String(task.id) !== String(id)
//   );
//   await fs.writeFile(taskPath, JSON.stringify(tasksList, null, 4));
// };

// module.exports = {
//   getAllService,
//   getByIdService,
//   createTaskService,
//   updateTaskService,
//   removeTaskService,
// };
