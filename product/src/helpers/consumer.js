const { consumerCallback } = require('../events/controllers/transaction')
const {kafka} = require('./kafka')

const callbacks = { ...consumerCallback }

exports.consumerCallback = {}

exports.consumer = async (topic) => {
  const consumer = kafka.consumer({ groupId: 'product-group' })
  await consumer.connect()
  await consumer.subscribe({ topics: topic, fromBeginning: true })
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(topic, 'topic')
      console.log({
        value: message.value.toString(),
      })

      if(consumerCallback[topic]) {
        consumerCallback[topic](JSON.parse(message.value.toString()))
      }
    },
  })
}
