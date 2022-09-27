const {pool} = require('../helpers/database')

exports.getAll = async (limit, paging) => {
    // page number
    const page = paging ?? 1
    const skip = limit ?? 10
    // calculate offset
    const offset = (page - 1) * skip
    // query for fetching data with page number and offset
    const prodsQuery = "select * from adjusment_transactions limit "+skip+" OFFSET "+offset
 
    return await pool.query(prodsQuery)
 }

exports.getDetail = async (id) => {
    return await pool.query(`SELECT * FROM adjusment_transactions WHERE id = ${id};--`)
}

exports.getDetailSku = async (id) => {
    return await pool.query(`SELECT * FROM adjusment_transactions WHERE sku = '${sku}';--`)
}

exports.create = async (payload) => {
    return  await pool.query(`INSERT INTO adjusment_transactions(sku,quantity,amount) VALUES('${payload.sku}','${payload.quantity}',${payload.amount})`)
}

exports.update = async (payload) => {
    return await pool.query(`UPDATE adjusment_transactions SET sku='${payload.sku}', quantity=${payload.quantity},amount=${payload.amount}`)
}

exports.deleteFromEvent = async (sku) => {
    return await pool.query(
        `DELETE
        FROM adjusment_transactions
        WHERE ID IN
        (
            SELECT ID
            FROM adjusment_transactions
            WHERE sku LIKE '${sku}'
        )`
    )
}

exports.delete = async (id) => {
 
    return await pool.query(`DELETE FROM adjusment_transactions where id = ${id};--`)
 }