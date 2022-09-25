const {client} = require('../helpers/database')

exports.getAll = async () => {
    return await client.query('SELECT * FROM adjustment_transactions')
}

exports.getDetail = async (id) => {
    return await client.query(`SELECT * FROM adjustment_transactions WHERE id = ${id};--`)
}

exports.create = async (payload) => {
    return  await client.query(`INSERT INTO adjusment_transactions(sku,quantity,amount) VALUES('${payload.sku}','${payload.quantity}','${payload.amount}')`)
}

exports.update = async (payload) => {
    return await client.query(`UPDATE adjustment_transactions SET sku='${payload.sku}', quantity='${payload.quantity},amount='${payload.amount}''`)
}