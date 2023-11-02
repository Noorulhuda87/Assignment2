const express = require('express');
const helmet = require('helmet');
const config = require('./config/config');

const mongoose = require('mongoose');
const cors = require('cors');


const productRoute = require('./server/routes/product.route.js');
const categoriesRoute = require('./server/routes/categories.route.js');

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());
app.use(helmet());

mongoose.connect(config.mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Unable to connect to Database :'));
db.once('open', () => {
  console.log('Connected to mongo db');

  app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Noor Dress Store Application.' });
  });


  app.use('/api/Products', productRoute);
  app.use('/api/categories', categoriesRoute);
  
  app.listen(PORT, () => {
    console.log('Server is running at' + " " +PORT);
  });
});