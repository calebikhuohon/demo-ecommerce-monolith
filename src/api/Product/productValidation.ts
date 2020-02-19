import Joi from "@hapi/joi";

export const ProductValidationSchema = Joi.object().keys({
    name: Joi.string()
        .max(30)
        .required(),
    description: Joi.string().required(),
    stock: Joi.number().required(),
    price: Joi.number().required(),
    condition: Joi.string(),
});