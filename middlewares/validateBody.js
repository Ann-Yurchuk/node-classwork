// const { tasksJoiSchema } = require("../utils/validation/validationSchemas");
const { HttpError } = require("../utils/HttpError");

const validateBody = (schema) => {
  return (req, res, next) => {
    const result = schema.validate(req.body);

    if (result.error) {
      return next(new HttpError(400, "Invalid data"));
    }
    next();
  };
};

module.exports = { validateBody };
