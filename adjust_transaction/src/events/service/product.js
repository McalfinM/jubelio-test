const repository = require('../repositories/product')
const service = require('../../services/transaction')

exports.getAll = async () => {

   let arr = []
   const data = await repository.getAll()
   const product = data.rows
   for(let i =0; i<product.length; i++){
      arr.push({
         id:product[i].id,
         sku: product[i].sku,
         name: product[i].name,
         stock: product[i].quantity,
         image: product[i].image
      })
   }

   return arr
}

exports.getDetail = async (sku) => {

   const data = await repository.getDetail(sku)
   return data.rows
}

exports.create = async (payload) => {
  
  const create = await repository.create(payload)
  return create
}

exports.update = async (payload) => {
  
  const create = await repository.update(payload)
  return create
}

exports.delete = async (message) => {
   const dataProdut = await repository.delete(message.sku)
   service.deleteFromEvent(message.sku)
   return dataProdut
}

exports.adjustmentProduct = async (payload) => {
   const product = await repository.getByProdNo(payload.sku)
   let stock = Number(product.rows[0].quantity) +Number(payload.quantity)
   let entity = {
      id: product.rows[0].id,
      name:  product.rows[0].name,
      sku:  product.rows[0].sku,
      quantity: stock,
      description:  product.rows[0].description,
      image:  product.rows[0].image,
      price:  product.rows[0].price
   }

   const data = await repository.update(entity)

   return entity
}