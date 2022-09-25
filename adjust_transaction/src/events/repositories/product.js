const {client} = require('../../helpers/database')

exports.getAll = async () => {

   return await client.query('SELECT * FROM products')
}

exports.getDetail = async (sku) => {
   return await client.query(`SELECT * FROM products where sku = '${sku}';-- `)
}

exports.create = async (payload) => {
   const product = await client.query( `INSERT INTO products(name,sku,quantity, price,description,image)  values('${payload.name}', '${payload.sku}', '${payload.quantity}', '${payload.price}', '${payload.description}', '${payload.image}')`)
   return true
}

exports.update = async (payload) => {
   const product = await client.query(`UPDATE products SET name='${payload.name}',sku='${payload.sku}',quantity=${payload.quantity},price=${payload.price},description='${payload.description}',image='${payload.image}' WHERE id = ${payload.id}`)
   return product
}

exports.getByProdNo = async (sku) => {
   return await client.query(`SELECT * FROM products where sku = '${sku}';--`)
}

exports.delete = async (id) => {
 
   return await client.query(`DELETE FROM products where id = ${id};--`)
}