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
    const data = await service.update(request.params.sku,value)
    return data
}

exports.getAll = async (request,h) => {
    const limit = request.query.limit
    const page = request.query.page
    const data = await service.get(limit,page)
    return data
}