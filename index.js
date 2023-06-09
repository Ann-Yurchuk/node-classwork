const { app } = require("./app");
const mongoose = require("mongoose");
require("dotenv").config();
const { PORT = 3000, DB_URL } = process.env;

(async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(DB_URL);
    console.log("Success db connected");
    app.listen(PORT, () => {
      console.log("Server start successful");
    });
  } catch (error) {
    console.log(error);
  }
})();
