const service = require('../services/transaction')

const consumerCallback = {
    create_transaction:  async (message) => {
        await service.create(message)
    },
    update_transaction:  async (message) => {
        await service.update(message)
    },
    delete_transaction:  async (message) => {
        await service.delete(message)
    }
}


module.exports = { consumerCallback }