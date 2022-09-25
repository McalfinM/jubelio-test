const {Kafka} = require('kafkajs')

const kafkaClient = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092', 'localhost:9093'],
})

module.exports = {kafkaClient}