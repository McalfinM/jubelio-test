const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised);
const sinonChai = require('sinon-chai');
const {client} = require('../src/helpers/database')
chai.use(sinonChai);
const {server} = require('../server')

let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkFudGhvbnkgVmFsaWQgVXNlciIsImlhdCI6MTQyNTQ3MzUzNX0.KA68l60mjiC8EXaC2odnjFwdIDxE__iDu5RwLdN1F2A'
const payload = {
  name: 'produk1',
  sku: '12345678',
  image: 'https://image.png',
  quantity: '10',
  price: 10000,
  description: 'produk pertama saya',
}
describe('Testing product API', () => {
    
  before('Create products tables', async function () {
    await client.query(`
    CREATE TABLE product_testing
(
    id SERIAL,
    name text,
    sku text,
    quantity numeric(10),
    price numeric(10),
    description text,
    image text,
    CONSTRAINT products_pkey PRIMARY KEY (id)
);
`)
  })

    describe('CREATE products', ()=>{
      context("with complete data", () => {
      it('Should create a new product', async function () {
  
        const options = {
          method: 'POST',
          url: '/testing-product',
          headers:{
            'Authorization': token
          },
          payload: JSON.stringify(payload)
      };
      const data = await server.inject(options);
      console.log(data,' data')
      expect(data.statusCode).equal(201);
        
      })
      it('Should get error duplicate sku', async function () {
      
  
        const options = {
          method: 'POST',
          url: '/testing-product',
          payload: JSON.stringify(payload),
          headers:{
            'Authorization': token
          }
        };
        const data = await server.inject(options);
        expect(data.result).eq('product number already exist');
      })
      it('Should get all product', async function () {
      
  
        const options = {
          method: 'GET',
          url: '/testing-product',
          headers:{
            'Authorization': token
          }
        };
        const data = await server.inject(options);
        expect(data.statusCode).eq(200);
        expect(data.result.data[0].name).equal(payload.name)
      })

      it('Should get detail product', async function () {
      
  
        const options = {
          method: 'GET',
          url: '/testing-product/sku/'+payload.sku,
          headers:{
            'Authorization': token
          }
        };
        const data = await server.inject(options);
        expect(data.statusCode).eq(200);
      })


      it('Should DELETE a product table', async function () {
        await client.query('DROP TABLE IF EXISTS product_testing')

      })

    })
    })
})