const express = require('express');
const app = express();
const jsondata = require('./static data/jsondata.json');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
connectDB();

app.get('/', (req, res) => {
  res.send(`API is runningon ${process.env.PORT}`);
});

app.listen(process.env.PORT, () => {
  console.log(`Server is runningon ${process.env.PORT}`);
  const data = JSON.parse(JSON.stringify(jsondata));
  console.log(data.length);
});
