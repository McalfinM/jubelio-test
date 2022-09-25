const repository = require('../repositories/adjustTransaction')
const serivceProduct = require('../events/service/product')

exports.get = async () => {

    const data = await repository.getAll()

    return data.rows
}

exports.getDetail = async (id) => {

    const data = await repository.getDetail(id)
    return data
}

exports.create = async (request) => {

    //search product by sku
    const product = await serivceProduct.getDetail(request.sku)
    if(product.length < 1) throw new Error('product not found')
    if(product.length > 0 && Number(product[0].quantity) ===0) throw new Error('product is out of stock')
    //logic create adjusment + logic harga * quantity yang dibuat
    let total_price = request.quantity * product[0].price
    let json = {
        sku: product[0].sku,
        quantity: request.quantity,
        amount: total_price

    }
   
    const adjust = await repository.create(json)
    const productAdjust = await serivceProduct.adjustmentProduct(json)
    return adjust
    //logic lempar kafka ke service product untuk mengurangi stok


}

exports.update = async (sku, request) => {
      //search product by sku
      const product = await serivceProduct.getDetail(sku)
      console.log(product,'pro')
      if(product.length < 1) throw new Error('product not found')
  
      //logic create adjusment + logic harga * quantity yang dibuat
      let total_price = request.quantity * product[0].price
      let json = {
          sku: product[0].sku,
          quantity: request.quantity,
          amount: total_price
  
      }
     
    const adjust = await repository.update(json)
    const productAdjust = await serivceProduct.adjustmentProduct(json)
    return adjust
      //logic lempar kafka ke service product untuk mengurangi stok
}