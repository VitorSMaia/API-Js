const Joi = require('joi');

module.exports = Joi.object({
    title: Joi.string()
        .min(3)
        .max(30)
        .required(),

    info: Joi.string()
        .pattern(/^[a-zA-Z0-9]{3,30}$/),

    state: Joi.boolean()
        .default(true),
    price: Joi.number()
        .integer()
        .required(),
    slug: Joi.string(),
    tags: Joi.array().items(Joi.string())
})