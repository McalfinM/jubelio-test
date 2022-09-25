const {kafka} = require('./kafka')


const consumer = kafka.consumer({ groupId: 'test-group' })

  consumer.connect()
  consumer.subscribe({ topic: 'test-topic', fromBeginning: true })

  consumer.run({
  eachMessage: async ({ topic, partition, message }) => {
    console.log({
      value: message.value.toString(),
    })
  },
})
