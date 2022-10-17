
const Hapi = require('@hapi/hapi');
const {client} = require('./src/helpers/database')
const product = require('./src/api/routes/product')
const testing = require('./src/api/routes/testing_api')
const auth = require('./src/api/routes/auth')
const {consumer} = require('./src/helpers/consumer')
const {topics} = require('./src/events/topic')
const Path = require('path')
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
  port: 8080,
  host: '0.0.0.0',
  routes: {
    files: {
        relativeTo: Path.join(__dirname, 'public')
    }
}

});
const init = async () => {
    await server.register(require('hapi-auth-jwt2'));
    await client.connect()
    server.auth.strategy('jwt', 'jwt',
    { key: 'NeverShareYourSecret', // Never Share your secret key
      validate  // validate function defined above
    });
    server.route({
      method: 'GET',
      path: '/',
      handler: (request,h) => {
        return 'congrats !!'
      }
    })
    await server.register(require('@hapi/inert'));
    server.route(product.product)

    //testing api
    server.route(testing.testing)
    server.route(auth.auth)
    await server.start();
    await consumer(topics)
    console.log('Server running on %s', server.info.uri);
};
process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});
init();
module.exports = {server}
