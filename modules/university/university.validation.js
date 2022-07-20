const Joi = require("joi");

const addUniversityValidator = {
  body: Joi.object().required().keys({
    university: Joi.string().required(),
    webPage: Joi.string().required(),
    domain: Joi.string().required(),
  }),
  params: Joi.object().required().keys({
    country: Joi.string().required(),
  }),
};
const getUniversitiesValidator = {
  params: Joi.object().required().keys({
    country: Joi.string().required(),
  }),
};

const updateUniversityValidator = {
  body: Joi.object().required().keys({
    webPage: Joi.string().required(),
    domain: Joi.string().required(),
  }),
  params: Joi.object()
    .required()
    .keys({
      country: Joi.string().required(),
      universityId: Joi.string().required().max(24).min(24),
    }),
};
const deleteUniversityValidator = {
  params: Joi.object()
    .required()
    .keys({
      country: Joi.string().required(),
      universityId: Joi.string().required().max(24).min(24),
    }),
};

module.exports = { addUniversityValidator, getUniversitiesValidator, deleteUniversityValidator, updateUniversityValidator };
