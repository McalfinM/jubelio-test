const repository = require('../repositories/transaction')
const service = require('../../services/product')

exports.get = async (limit,page) => {

    let arr = []
    const data = await repository.getAll(limit,page)
      const transaction = data.rows
    for(let i =0; i<transaction.length; i++){
       arr.push({
          id:transaction[i].id,
          sku: transaction[i].sku,
          name: transaction[i].name,
          stock: transaction[i].quantity,
          image: transaction[i].image
       })
    }
    let json = {
       total: data.rowCount,
       page: page,
       data: arr
    }
  
 
    return json
}

exports.getDetail = async (id) => {

    const data = await repository.getDetail(id)
    return data
}

exports.create = async (request) => {

    const productAdjust = await service.updateFromevent(request)
    return productAdjust


}

exports.update = async (request) => {
    const productAdjust = await service.updateFromevent(request)
    return productAdjust
}