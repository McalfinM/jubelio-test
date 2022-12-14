const repository = require('../repositories/adjustTransaction')
const serivceProduct = require('../events/service/product')
const producer = require('../helpers/producer')

exports.get = async (limit,page) => {

    let arr = []
    const data = await repository.getAll(limit,page)
      const transaction = data.rows
    for(let i =0; i<transaction.length; i++){
       arr.push({
          id:transaction[i].id,
          sku: transaction[i].sku,
          quantity: transaction[i].quantity,
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

exports.create = async (request) => {

    //search product by sku
    const product = await serivceProduct.getDetail(request.sku)
    if(product.length < 1) throw new Error('product not found')
    if(product.length > 0 && Number(product[0].quantity) < 1) throw new Error('product is out of amount')
    //logic create adjusment + logic harga * quantity yang dibuat
    let total_price = request.quantity * product[0].price
    if(total_price < 0){
        total_price = total_price * -1
    }
    let json = {
        sku: product[0].sku,
        quantity: request.quantity,
        amount: total_price

    }
   
    const adjust = await repository.create(json)
    const productAdjust = await serivceProduct.adjustmentProduct(json)
    await producer.produce('create_transaction', productAdjust)
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
        await producer.produce('update_transaction', productAdjust)
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