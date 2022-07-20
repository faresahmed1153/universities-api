const Joi = require("joi");

const addCountryValidator = {
  body: Joi.object()
    .required()
    .keys({
      country: Joi.string().required(),
      stateProvince: Joi.string(),
      alphaTwoCode: Joi.string().required().min(2).max(2),
    }),
};
module.exports = { addCountryValidator };
