const { consumerCallback } = require('../events/controllers/product')
const {kafkaClient} = require('./kafka')

const callbacks = { ...consumerCallback }

exports.consumer = async (topic) => {
  const consumer = kafkaClient.consumer({ groupId: 'adjust-group' })
  await consumer.connect()
  await consumer.subscribe({ topics: topic, fromBeginning: true })
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(topic, 'topic')
      console.log({
        value: message.value.toString(),
      })

      if(callbacks[topic]) {
        callbacks[topic](JSON.parse(message.value.toString()))
      }
    },
  })
}
