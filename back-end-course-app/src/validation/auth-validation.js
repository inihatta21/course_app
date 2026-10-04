import Joi from "joi";

export const registerUserValidation = Joi.object({
    email: Joi.string().max(100),
}) 

export const kodeOtpUserValidation = Joi.object({
    id_user_validate: Joi.number(),
    first_name: Joi.string().max(50),
    last_name: Joi.string().max(50),
    password: Joi.string().max(50),
    kode: Joi.string().max(4)
})

export const loginUserValidation = Joi.object({
    email: Joi.string().max(100),
    password: Joi.string().max(50)
})

export const logoutValidation = Joi.object({
    refresh_token: Joi.string()
}) 

export const updateKodeValidation = Joi.object({
    email: Joi.string()
})

export const updateAccessTokenValidation = Joi.object({
    email: Joi.string().max(100),
    refresh_token: Joi.string()
})
