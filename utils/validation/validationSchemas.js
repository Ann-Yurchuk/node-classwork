const Joi = require("joi");
const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const tasksJoiSchema = Joi.object({
  title: Joi.string().alphanum().min(3).max(100).required(),
  completed: Joi.boolean().required(),
});

const userJoiSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string()
    .pattern(passwordPattern)
    .messages({
      "string.pattern.base":
        "Password should contain minimum eight characters, at least one letter and one number.",
    })
    .required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required(),
});

const userJoiSchemaLogin = Joi.object({
  password: Joi.string()
    .pattern(passwordPattern)
    .messages({
      "string.pattern.base":
        "Password should contain minimum eight characters, at least one letter and one number.",
    })
    .required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required(),
});

module.exports = { tasksJoiSchema, userJoiSchema, userJoiSchemaLogin };
