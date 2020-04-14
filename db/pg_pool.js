const { Pool } = require('pg');
const dbConfig = require('../config/db_config.js');

const pool = new Pool({
  user: dbConfig.user,
  host: dbConfig.host,
  database: dbConfig.database,
  max: 1000,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
  // password: dbConfig.password
  // port: dbConfig.port

});

module.exports = pool;