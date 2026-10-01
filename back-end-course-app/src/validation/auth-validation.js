import Joi from "joi";

export const registerUserValidation = Joi.object({
    email: Joi.string().max(100),
}) 