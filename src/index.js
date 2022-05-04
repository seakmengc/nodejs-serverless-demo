const express = require('express');
const app = express();

console.log('Init...');

app.use('/', (req, res) => {
  res.send(`Hello, ${req.query.name}.`);
});

module.exports = app;
