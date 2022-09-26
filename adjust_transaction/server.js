
const Hapi = require('@hapi/hapi');
const {client} = require('./src/helpers/database')
const transaction = require('./src/api/routes/transaction')
const {consumer}  = require('./src/helpers/consumer')
const {topic} = require('./src/events/topics')
const server = Hapi.server({
  port: 8089,
  host: '0.0.0.0'
});
const init = async () => {

   
    await client.connect()
    server.route({
      method: 'GET',
      path: '/',
      handler: (request,h) => {
        return 'congrats !!'
      }
    })
    server.route(transaction.transaction)
    await server.start();
    await consumer(topic)
    console.log('Server running on %s', server.info.uri);
};
process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});
init();


module.exports = {server}