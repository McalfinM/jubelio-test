const {Kafka} = require('kafkajs')
const dotenv = require('dotenv')
dotenv.config()

const kafka = new Kafka({
  clientId: 'product',
  brokers: (process.env.BROKERS || 'localhost:9092').split(",")
})

module.exports = {kafka}