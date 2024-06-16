const express = require('express');
const app = express();
const db = require('./db/dbConnection.js');
const products = require('./routes/product.route.js');
require('dotenv').config();
const port = process.env.port;
app.listen(port, () => {
  console.log('server is running on port 3000');
  db();
});

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/api/products', products);

app.get('/', (req, res) => {
  res.json({ msg: 'Hello from node API' });
});
