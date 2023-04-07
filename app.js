const express = require("express");

const { notFound } = require("./middlewares/notFound");
const { globalErrorHandler } = require("./middlewares/globalErrorHandler");
const { rootRouter } = require("./routers");

const app = express();

app.use(express.json());

app.use("/", rootRouter);

app.use(notFound);
app.use(globalErrorHandler);

module.exports = { app };
