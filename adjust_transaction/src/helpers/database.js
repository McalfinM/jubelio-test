const { Client } = require("pg");

const client = new Client({
    password: "123456789",
    user: "postgres",
    host: "localhost",
    port: 5432,
    database: "jubelio"
  });
  


module.exports = {client}