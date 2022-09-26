const service = require('../service/product')

const consumerCallback = {
    create_product:  async (message) => {
        await service.create(message)
    },
    update_product:  async (message) => {
        await service.update(message)
    },
    delete_product:  async (message) => {
        await service.delete(message)
    }
}


module.exports = { consumerCallback }