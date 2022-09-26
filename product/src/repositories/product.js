const {client} = require('../helpers/database')


exports.getAll = async (limit, paging) => {
   // page number
   const page = paging ?? 1
   const skip = limit ?? 10
   // calculate offset
   const offset = (page - 1) * skip
   // query for fetching data with page number and offset
   const prodsQuery = "select * from products ORDER BY id limit "+skip+" OFFSET "+offset

   return await client.query(prodsQuery)
}

exports.getDetail = async (id) => {
   return await client.query(`SELECT * FROM products where id  =  ${id};-- `)
}

exports.create = async (payload) => {
   const product = await client.query( `INSERT INTO products(name,sku, quantity, price, description, image)  values('${payload.name}', '${payload.sku}', '${payload.quantity}', '${payload.price}', '${payload.description}', '${payload.image}')`)
   return product
}

exports.update = async (payload) => {
   const product = await client.query(`UPDATE products SET name='${payload.name}',sku='${payload.sku}',quantity=${payload.quantity},price=${payload.price},description='${payload.description}',image='${payload.image}' WHERE sku = '${payload.sku}'`)
   return product
}

exports.getByProdNo = async (sku) => {
 
   return await client.query(`SELECT * FROM products where sku = '${sku}';--`)
}

exports.delete = async (id) => {
 
   return await client.query(`DELETE FROM products where id = ${id};--`)
}

exports.deleteBySku = async (sku) => {
 
   return await client.query(`DELETE FROM products where sku = '${sku}';--`)
}