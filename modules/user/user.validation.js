const Joi = require("joi");

const emailValidator = {
  body: Joi.object()
    .required()
    .keys({
      email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "me", "io"] } }),
    }),
};
const resetValidator = {
  body: Joi.object()
    .required()
    .keys({
      password: Joi.string()
        .pattern(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/))
        .required(),
      cPassword: Joi.string().valid(Joi.ref("password")).required(),
    }),
  params: Joi.object().required().keys({
    token: Joi.string().required(),
  }),
};

const signUpValidator = {
  body: Joi.object()
    .required()
    .keys({
      name: Joi.string().required(),
      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "me", "io"] } })
        .required(),
      password: Joi.string()
        .pattern(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/))
        .required(),
    }),
};

const loginValidator = {
  body: Joi.object()
    .required()
    .keys({
      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "me", "io"] } })
        .required(),
      password: Joi.string()
        .pattern(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/))
        .required(),
    }),
};
const searchValidator = {
  query: Joi.object().required().keys({
    searched: Joi.string().required(),
  }),
};
module.exports = {
  signUpValidator,
  loginValidator,
  emailValidator,
  resetValidator,
  searchValidator,
};
