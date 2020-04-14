const pool = require('./pg_pool');

module.exports.getMenus = (restaurantID, callback) => {
  pool.connect((err, client, release) => {
    if (err) {
      return console.error('Error acquiring client', err.stack);
    }
    const text = `SELECT * FROM menuitemsdenormalized WHERE restaurant_id=${restaurantID};`;
    client.query(text, (err, data) => {
      release();
      if (err) {
        callback(err);
      } else {
        callback(err, data);
      }
    });
  });
};