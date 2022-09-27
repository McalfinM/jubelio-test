const {pool} = require('../../helpers/database')

exports.getAll = async () => {

   return await pool.query('SELECT * FROM products')
}

exports.getDetail = async (sku) => {
   return await pool.query(`SELECT * FROM products where sku = '${sku}';-- `)
}

exports.create = async (payload) => {
   const product = await pool.query( `INSERT INTO products(name,sku,quantity, price,description,image)  values('${payload.name}', '${payload.sku}', '${payload.quantity}', '${payload.price}', '${payload.description}', '${payload.image}')`)
   return true
}

exports.update = async (payload) => {
   const product = await pool.query(`UPDATE products SET name='${payload.name}',sku='${payload.sku}',quantity=${payload.quantity},price=${payload.price},description='${payload.description}',image='${payload.image}' WHERE sku = '${payload.sku}'`)
   return product
}

exports.getByProdNo = async (sku) => {
   return await pool.query(`SELECT * FROM products where sku = '${sku}';--`)
}

exports.delete = async (sku) => {
 
   return await pool.query(`DELETE
   FROM products
   WHERE ID IN
   (
       SELECT ID
       FROM products
       WHERE sku LIKE '${sku}'
   )`)
}