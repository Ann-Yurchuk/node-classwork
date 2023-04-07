const globalErrorHandler = (error, req, res, next) => {
  res
    .status(error.statusCode || 500)
    .json({ message: error.message || "Something get wrong" });
};

module.exports = { globalErrorHandler };
