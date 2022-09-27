const service = require('../service/testing')

const consumerCallback = {
    testing_create_product:  async (message) => {
        await service.create(message)
    },
    testing_update_product:  async (message) => {
        await service.update(message)
    },
    testing_delete_product:  async (message) => {
        await service.delete(message)
    }
}


module.exports = { consumerCallback }