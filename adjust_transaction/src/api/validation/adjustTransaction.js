const Joi = require('@hapi/joi')

exports.create = data => {
    const schema = Joi.object({
        sku: Joi.string().required().empty(),
        quantity: Joi.number().required().empty()
    });

    return schema.validate(data);
};

exports.update = data => {
    const schema = Joi.object({
        quantity: Joi.number().required().empty()
    });

    return schema.validate(data);
};

