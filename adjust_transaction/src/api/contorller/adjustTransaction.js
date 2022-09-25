const service = require('../../services/transaction')
const {create,update} = require('../validation/adjustTransaction')

exports.create = async (request,h) => {

    const { error, value } = create(request.payload);
    if (error) {
        return h.response({ message: error.details[0].message }).code(422)
    }
    const data = await service.create(value)
    return data
}

exports.update = async (request,h) => {

    const { error, value } = update(request.payload);
    if (error) {
        return h.response({ message: error.details[0].message }).code(422)
    }
    console.log(request)
    const data = await service.update(request.params.sku,value)
    return data
}