const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');

let app = express();

let port = 3040;

// serves up static files to localhost
app.use('/:id', express.static('client/dist'));
// app.use('/:id', express.static(path.resolve(__dirname, '..', 'public')));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// get db connection
const db = require('../db/index.js');

// Create GET route for menu
app.get('/api/menu/:id', function(req, res) {
  // This route should send back all the menu items
  console.log('GET -->/api/menu/:id<-- Route Works!');
  db.getMenus(req.params.id, (err, data) => {
    if (err) {
      console.log('error retreiving data: ', err);
      res.status(500).send();
    } else {
      console.log('retreived menus: ', data);
      res.status(200).send(data);
    }
  });
});

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

module.exports = app;