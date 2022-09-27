const {pool} = require('../helpers/database')


exports.getAll = async (limit, paging) => {
   // page number
   const page = paging ?? 1
   const skip = limit ?? 10
   // calculate offset
   const offset = (page - 1) * skip
   // query for fetching data with page number and offset
   const prodsQuery = "select * from product_testing ORDER BY id limit "+skip+" OFFSET "+offset

   return await pool.query(prodsQuery)
}

exports.getDetail = async (id) => {
   return await pool.query(`SELECT * FROM product_testing where id  =  ${id};-- `)
}

exports.create = async (payload) => {
   const product = await pool.query( `INSERT INTO product_testing(name,sku, quantity, price, description, image)  values('${payload.name}', '${payload.sku}', '${payload.quantity}', '${payload.price}', '${payload.description}', '${payload.image}')`)
   return product
}

exports.update = async (payload) => {
   const product = await pool.query(`UPDATE product_testing SET name='${payload.name}',sku='${payload.sku}',quantity=${payload.quantity},price=${payload.price},description='${payload.description}',image='${payload.image}' WHERE sku = '${payload.sku}'`)
   return product
}

exports.getByProdNo = async (sku) => {
 
   return await pool.query(`SELECT * FROM product_testing where sku = '${sku}';--`)
}

exports.delete = async (id) => {
 
   return await pool.query(`DELETE FROM product_testing where id = ${id};--`)
}

exports.deleteBySku = async (sku) => {
 
   return await pool.query(`DELETE FROM product_testing where sku = '${sku}';--`)
}