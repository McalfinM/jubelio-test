const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised);
const sinon = require("sinon");
const sinonChai = require('sinon-chai');
const Pool = require('pg')
const {pool} = require('../src/helpers/database')
const request = require('supertest')
chai.use(sinonChai);
const {server} = require('../server')

let app = "localhost:8080", uri = '/product'
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
    await pool.query(`
    CREATE TABLE products
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
          url: '/product',
          headers:{
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkFudGhvbnkgVmFsaWQgVXNlciIsImlhdCI6MTQyNTQ3MzUzNX0.KA68l60mjiC8EXaC2odnjFwdIDxE__iDu5RwLdN1F2A'
          },
          payload: JSON.stringify(payload)
      };
      const data = await server.inject(options);
      expect(data.statusCode).equal(201);
        
      })
      it('Should get error duplicate sku', async function () {
      
  
        const options = {
          method: 'POST',
          url: '/product',
          payload: JSON.stringify(payload),
          headers:{
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkFudGhvbnkgVmFsaWQgVXNlciIsImlhdCI6MTQyNTQ3MzUzNX0.KA68l60mjiC8EXaC2odnjFwdIDxE__iDu5RwLdN1F2A'
          }
        };
        const data = await server.inject(options);
        expect(data.result).eq('product number already exist');
      })
      it('Should get all product', async function () {
      
  
        const options = {
          method: 'GET',
          url: '/product',
          headers:{
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkFudGhvbnkgVmFsaWQgVXNlciIsImlhdCI6MTQyNTQ3MzUzNX0.KA68l60mjiC8EXaC2odnjFwdIDxE__iDu5RwLdN1F2A'
          }
        };
        const data = await server.inject(options);
        expect(data.statusCode).eq(200);
        expect(data.result[0].name).equal(payload.name)
      })

      it('Should get detail product', async function () {
      
  
        const options = {
          method: 'GET',
          url: '/product/sku/'+payload.sku,
          headers:{
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkFudGhvbnkgVmFsaWQgVXNlciIsImlhdCI6MTQyNTQ3MzUzNX0.KA68l60mjiC8EXaC2odnjFwdIDxE__iDu5RwLdN1F2A'
          }
        };
        const data = await server.inject(options);
        expect(data.statusCode).eq(200);
      })


      it('Should DELETE a product table', async function () {
        await pool.query('DROP TABLE IF EXISTS products')

      })

    })
    })
})