
const Hapi = require('@hapi/hapi');
const {client} = require('./src/helpers/database')
const transaction = require('./src/api/routes/transaction')
const {consumer}  = require('./src/helpers/consumer')
const {topic} = require('./src/events/topics');
const { testing } = require('./src/api/routes/testing');

const people = { // our "users database"
  1: {
    id: 1,
    name: 'Jen Jones'
  }
};
const validate = async function (decoded, request, h) {

  // do your checks to see if the person is valid
  if (!people[decoded.id]) {
    return { isValid: false };
  }
  else {
    return { isValid: true };
  }
};
const server = Hapi.server({
  port: 8081,
  host: '0.0.0.0'
});
const init = async () => {

  await server.register(require('hapi-auth-jwt2'));
    await client.connect()
    server.route({
      method: 'GET',
      path: '/',
      handler: (request,h) => {
        return 'congrats !!'
      }
    })
    server.auth.strategy('jwt', 'jwt',
    { key: 'NeverShareYourSecret', // Never Share your secret key
      validate  // validate function defined above
    });
    server.route(transaction.transaction)
    server.route(testing)
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