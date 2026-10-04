import Joi from "joi";

export const getCourseCategorieValidation = Joi.string()
  .max(50)
  .pattern(/^[^/]*$/);
