const Joi = require('@hapi/joi')

exports.create = data => {
    const schema = Joi.object({
        name: Joi.string().required().empty(),
        sku: Joi.string().required().empty().min(8).max(8),
        image: Joi.string().required().empty(),
        quantity: Joi.number().required().empty(),
        price: Joi.number().required().empty(),
        description: Joi.string().required().empty(),
    });

    return schema.validate(data);
};
