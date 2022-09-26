const repository = require('../repositories/testing')
const producer = require('../helpers/producer')

exports.getAll = async (npp,page) => {

   let arr = []
   const data = await repository.getAll(npp,page)
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
   let json = {
      total: data.rowCount,
      page: page,
      data: arr
   }
 

   return json
}

exports.getDetail = async (id) => {

   const data = await repository.getDetail(id)
   return data.rows
}

exports.getDetailSku = async (sku) => {

   const data = await repository.getByProdNo(sku)
   return data.rows
}

exports.create = async (payload) => {
   const sku = await  repository.getByProdNo(payload.sku)
  
   if(sku && sku.rowCount > 0) throw new Error('product number already exist')
   let data = {
      name: payload.name,
      sku: payload.sku,
      image: payload.image,
      quantity: payload.quantity,
      price: payload.price,
      description: payload.description,
   }
  const create = await repository.create(data)
  await producer.produce('create_product', data)

  return create
}

exports.update = async (id,payload) => {
   const product = await repository.getDetail(id)
   if(product.rowCount < 1) throw new Error('product not found')
   const sku = await  repository.getByProdNo(payload.sku)
   if(sku.rowCount > 0 && sku.rows[0].id === id){
   }else if(sku.rowCount > 0 && sku.rows[0].id != id){
      throw new Error('Product number already exist')
   }
   let data = {
      id: id,
      name: payload.name,
      sku: payload.sku,
      image: payload.image,
      quantity: payload.quantity,
      price: payload.price,
      description: payload.description,
   }
  const create = await repository.update(data)
  await producer.produce('update_product', data)
  return create
}

exports.delete = async (id) => {
   const product = await repository.getDetail(id)
   if(product.rowCount < 1) throw new Error('product not found')

   const dataProdut = await repository.delete(id)
   await producer.produce('delete_product', product.rows[0])
   return dataProdut
}

exports.deleteSku = async (sku) => {
   const dataProdut = await repository.deleteBySku(sku)
   return dataProdut
}

exports.updateFromevent = async (data) => {
   const create = await repository.update(data)

   return create
}