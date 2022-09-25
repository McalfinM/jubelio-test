const { Client, Pool } = require("pg");
const dotenv = require('dotenv')
dotenv.config()
let database = ""
if(process.env.NODE_ENV === 'test'){
  database = 'testing'
}else{
  database = 'jubelio'
}
const client = new Client({
    password: "123456789",
    user: "postgres",
    host: "localhost",
    database: database,
    port: 5432
  });
  
const pool = new Pool({
  database: 'testing',
  user: 'postgres',
  password: '123456789',
  port: 5432,
  max:1
})

module.exports = {client,pool}