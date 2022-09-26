
const {kafkaClient} = require('./kafka')

exports.produce = async (topic, obj) => {
    const producer = kafkaClient.producer()

    await producer.connect()
    await producer.send({topic: topic, messages: [{value: JSON.stringify(obj)}]})
    await producer.disconnect()
    return producer
}

