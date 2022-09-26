const service = require('../../services/testing')
const {create} = require('../validate/product')
exports.getAll = async (request, h) => {

    const data = await service.getAll(request.query.npp, request.query.page)

    return data
}

exports.getDetai = async(request, h) => {

    try{
        return await service.getDetail(request.params.id)
    }catch(err){
        console.log(err)
    }
}

exports.create = async(request, h) => {
    const { error, value } = create(request.payload);
    if (error) {
        return h.response({ message: error.details[0].message }).code(422)
    }

    const data = await service.create(value);
    return data
}

exports.update = async(request, h) => {
    const { error, value } = create(request.payload);
    if (error) {
        return h.response({ message: error.details[0].message }).code(422)
    }

    const data = await service.update(request.params.id,value);
    return data
}

exports.delete = async (request,h) => {
    const data = await service.delete(request.params.id);
    return data
}

exports.deleteSku = async (request,h) => {
    const data = await service.deleteSku(request.params.id);
    return data
}

exports.getDetailSku = async(request, h) => {

    try{
        return await service.getDetailSku(request.params.id)
    }catch(err){
        console.log(err)
    }
}