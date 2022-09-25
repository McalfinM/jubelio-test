const {createProxyMiddleware} = require('http-proxy-middleware')

const Hapi = require('@hapi/hapi');


const init = async () => {

    const server = Hapi.server({
        port: 8083,
        host: '0.0.0.0'
    });
   
const {
    PRODUCTS_API_URL,
    ADT,
  } = require('./api');
  
  const optionsProducts = {
    target: 'http://localhost:8080/product',
    changeOrigin: true, 
    logger: console,
  };
  
  const optionsOrders = {
    target: 'http://localhost:8081/adjust',
    changeOrigin: true, 
    logger: console,
  };

  
const productsProxy = createProxyMiddleware(optionsProducts);
const ordersProxy = createProxyMiddleware(optionsOrders);
server.route({
    path: '/product',
    handler: productsProxy
})

    await server.start();
    console.log('Server running on %s', server.info.uri);
};
process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});
init();
