const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { initializeDB } = require('./database/db');
const { loadCSV } = require('./services/csvService');
const { getTransactions } = require('./controllers/transactionController');

const app = express();

app.use(cors({ origin: 'http://localhost:3001' }));

app.use(bodyParser.json());

initializeDB();
loadCSV('./data/vendas_e_devoluções.csv').then(() => {
  console.log('CSV loaded into database');
});

app.get('/api/transactions', getTransactions);

module.exports = app;
