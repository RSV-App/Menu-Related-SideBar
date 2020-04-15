require('newrelic');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');

let app = express();

let port = 3040;

// serves up static files to localhost
app.use('/:id([0-9]+)', express.static('client/dist'));
// app.use('/:id', express.static(path.resolve(__dirname, '..', 'public')));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// get db connection
const db = require('../db/index.js');

// Create GET route for menu
app.get('/api/menu/:id', function(req, res) {
  // This route should send back all the menu items
  // console.log('GET -->/api/menu/:id<-- Route Works!');
  db.getMenus(req.params.id, (err, data) => {
    if (err) {
      // console.log('error retreiving data: ', err);
      res.status(500).send();
    } else {
      // console.log('retreived menus: ', data);
      res.status(200).send(data);
    }
  });
});

app.get('/api/bundle', function(req, res) {
  // res.set('Content-Encoding', 'gzip');
  res.sendFile(path.resolve(__dirname, '..', 'client', 'dist', 'bundle.js'));
});

app.get('/loaderio-c41f8f8cf6dcf8682055a5ad8234d7f9.txt', function(req, res) {
  res.sendFile(path.resolve(__dirname, '..', 'loaderio-c41f8f8cf6dcf8682055a5ad8234d7f9.txt'));
});

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

module.exports = app;