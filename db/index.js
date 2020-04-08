const createClient = require('./pg_client.js');


module.exports.getMenus = (restaurantID, callback) => {
  const client = createClient();
  client.connect(err => {
    if (err) {
      console.error('connection error', err.stack);
    } else {
      console.log('connected to db');
    }
  });
  const text = `SELECT * FROM menuitemsdenormalized WHERE restaurant_id=${restaurantID};`;
  client.query(text, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(err, data);
    }
    client.end();
  });
};
