const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised);
const sinonChai = require('sinon-chai');
const {pool} = require('../src/helpers/database')
chai.use(sinonChai);
const {server} = require('../server');
const { consumer } = require('../src/helpers/consumer');

let payload = {
  sku: '26682889',
  quantity: 12
}



let payload_two = {
  sku: '26682888',
  quantity: 3
}
describe('Testing adjusment transaction API', () => {
    
    before('Create products tables', async function () {
      // await consumer(consum)
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
  await pool.query(`
  CREATE TABLE adjusment_transactions
  (
      id SERIAL,
      sku text,
      quantity numeric(10),
      amount numeric(10),
      CONSTRAINT transaction_pkey PRIMARY KEY (id)
  );
`)

await pool.query(`
INSERT INTO products(name,sku, quantity, price, description, image) VALUES ('Baseus Cable 1 Meter Micro USB', '26682889',20, 5000, 'Baseus White 1 Meter Micro USB 5 Pin to USB 2.0 High Speed Data Sync Charge >Cable for Samsung HTC Nokia Sony LG Xiaomi 100% new top quality high speed Micro USB 5pin to USB 2.0 data sync charge cable >High speed more reliable data transfer and charging, save time save money >Round cable, durable and strong, 1 meter length >2-in-1 function allowing charging and data transfer at the same time >Easily charges your device by simple connecting to USB port of your PC or wall >plug (not included) >Update music / data and more to your smart phone devices with micro usb port >through this data cable >Wide compatibility, suitable for most Android mobile phones, such as Samsung, >HTC, LG, Nokia, Sony, etc. >Cable Length: 1 Meter', 'http://image.elevenia.co.id/g/6/8/2/8/8/8/26682888_A1_V2.jpeg');
INSERT INTO products(name,sku, quantity, price, description, image) VALUES ('Baseus Cable 1 Meter Micro USB', '26682888',0, 5000, 'Baseus White 1 Meter Micro USB 5 Pin to USB 2.0 High Speed Data Sync Charge >Cable for Samsung HTC Nokia Sony LG Xiaomi 100% new top quality high speed Micro USB 5pin to USB 2.0 data sync charge cable >High speed more reliable data transfer and charging, save time save money >Round cable, durable and strong, 1 meter length >2-in-1 function allowing charging and data transfer at the same time >Easily charges your device by simple connecting to USB port of your PC or wall >plug (not included) >Update music / data and more to your smart phone devices with micro usb port >through this data cable >Wide compatibility, suitable for most Android mobile phones, such as Samsung, >HTC, LG, Nokia, Sony, etc. >Cable Length: 1 Meter', 'http://image.elevenia.co.id/g/6/8/2/8/8/8/26682888_A1_V2.jpeg');
`)
    })
  
      describe('CREATE adjusment transaction', ()=>{
        context("with complete data", () => {
        it('Should create a new product', async function () {
    
          const options = {
            method: 'POST',
            url: '/testing-transaction',
            headers:{
              'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkFudGhvbnkgVmFsaWQgVXNlciIsImlhdCI6MTQyNTQ3MzUzNX0.KA68l60mjiC8EXaC2odnjFwdIDxE__iDu5RwLdN1F2A'
            },
            payload: JSON.stringify(payload)
        };
        const data = await server.inject(options);

        expect(data.statusCode).equal(201);
          
        })
        it('Should get error stock 0', async function () {
        
    
          const options = {
            method: 'POST',
            url: '/testing-transaction',
            payload: JSON.stringify(payload_two),
            headers:{
              'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkFudGhvbnkgVmFsaWQgVXNlciIsImlhdCI6MTQyNTQ3MzUzNX0.KA68l60mjiC8EXaC2odnjFwdIDxE__iDu5RwLdN1F2A'
            }
          };
          const data = await server.inject(options);
          expect(data.result).equal('product is out of amount');
        })
        it('Should get all transaction', async function () {
        
    
          const options = {
            method: 'GET',
            url: '/testing-transaction',
            headers:{
              'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkFudGhvbnkgVmFsaWQgVXNlciIsImlhdCI6MTQyNTQ3MzUzNX0.KA68l60mjiC8EXaC2odnjFwdIDxE__iDu5RwLdN1F2A'
            }
          };
          const data = await server.inject(options);

          expect(data.statusCode).eq(200);
        })
  
        it('Should get detail transaction', async function () {
        
    
          const options = {
            method: 'GET',
            url: '/testing-transaction/sku/'+ payload.sku,
            headers:{
              'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkFudGhvbnkgVmFsaWQgVXNlciIsImlhdCI6MTQyNTQ3MzUzNX0.KA68l60mjiC8EXaC2odnjFwdIDxE__iDu5RwLdN1F2A'
            }
          };
          const data = await server.inject(options);
          expect(data.statusCode).eq(200);
        })
  
  
        it('Should DELETE a adjusment_transaction table', async function () {
          await pool.query('DROP TABLE IF EXISTS adjusment_transactions')
  
        })

        it('Should DELETE a products table', async function () {
          await pool.query('DROP TABLE IF EXISTS products')
  
        })
  
      })
      })
  })