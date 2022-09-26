const {Kafka} = require('kafkajs')

const kafkaClient = new Kafka({
  clientId: 'adjust_transaction',
  brokers: (process.env.BROKERS || 'localhost:9092').split(",")
})

module.exports = {kafkaClient}