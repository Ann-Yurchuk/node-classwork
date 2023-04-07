const { program } = require("commander");
const {
  getAll,
  getById,
  createTask,
  removeTask,
} = require("./services/services");

program
  .name("myCli")
  .description("A simple CLI to manage your tasks")
  .version("1.0.0")
  .option("--method <method>", "Action to perform")
  .option("--id <id>", "Task id")
  .option("--title <title>", "Task title")
  .option("--completed <completed>", "Task completion status");
program.parse(process.argv);
const { method, id, title, completed } = program.opts();
console.log(method, id, title, completed);

(async () => {
  if (method === "list") {
    const result = await getAll();
    console.log(result);
  }
  if (method === "get") {
    const result = await getById(id);
    console.log(result);
  }
  if (method === "create") {
    const result = await createTask(title, completed);
    console.log(result);
  }
  if (method === "update") {
  }
  if (method === "remove") {
    const result = await removeTask(id);
    console.log(result);
  }
})();

// const iinvokeAction = (async) => {};

// (async (arg: string, arg1: string) => {
//     console.log(arg, arg1);
// })(arg: 'hello', arg1: 'world')
