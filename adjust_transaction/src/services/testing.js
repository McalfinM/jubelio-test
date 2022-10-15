const repository = require('../repositories/testing')
const serivceProduct = require('../events/service/testing')
const producer = require('../helpers/producer')

exports.get = async (limit,page) => {

    let arr = []
    const data = await repository.getAll(limit,page)
      const transaction = data.rows
    for(let i =0; i<transaction.length; i++){
       arr.push({
          id:transaction[i].id,
          sku: transaction[i].sku,
          name: transaction[i].name,
          amount: transaction[i].amount,
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
    return data.rows[0]
}

exports.getDetailSku = async (id) => {

    const data = await repository.getDetailSku(id)
    return data.rows[0]
}
exports.create = async (request) => {

    //search product by sku
    const product = await serivceProduct.getDetail(request.sku)
    if(product.length < 1) throw new Error('product not found')
    if(product.length > 0 && Number(product[0].quantity) < 1) throw new Error('product is out of stock')
    //logic create adjusment + logic harga * quantity yang dibuat
    let total_price = request.quantity * product[0].price
    let json = {
        sku: product[0].sku,
        quantity: request.quantity,
        amount: total_price

    }
   
    const adjust = await repository.create(json)
    const productAdjust = await serivceProduct.adjustmentProduct(json)
    .then(async (data)=> {
        await producer.produce('create_transaction', data)
    })
    return adjust
    //logic lempar kafka ke service product untuk mengurangi stok


}

exports.update = async (sku, request) => {
      //search product by sku
      const product = await serivceProduct.getDetail(sku)
   
      if(product.length < 1) throw new Error('product not found')
  
      //logic create adjusment + logic harga * quantity yang dibuat
      let total_price = request.quantity * product[0].price
      let json = {
          sku: product[0].sku,
          quantity: request.quantity,
          amount: total_price
  
      }
    return new Promise( async (res,rej) => {
        const adjust = await repository.update(json)
        const productAdjust = await serivceProduct.adjustmentProduct(json)
        .then(async (data) => {
            await producer.produce('update_transaction', data)
        })
        res(adjust)
    })
      //logic lempar kafka ke service product untuk mengurangi stok
}

exports.deleteFromEvent = async (sku) => {
    const data = await repository.deleteFromEvent(sku)

    return data
}

exports.delete = async (id) => {
    const data = await repository.delete(id)

    return data
}