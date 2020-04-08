const { Client } = require('pg');
const dbConfig = require('../config/db_config.js');

const createClient = () => {
  return new Client({
    user: dbConfig.user,
    host: dbConfig.host,
    database: dbConfig.database
    // password: dbConfig.password
    // port: dbConfig.port
  });
};

module.exports = createClient;