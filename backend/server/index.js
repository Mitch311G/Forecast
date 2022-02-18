const express = require('express');
const path = require('path');
const db = require('../database')
require('dotenv').config();
const { findCities, saveCity, deleteCity } = require('../database/controllers/Cities.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.resolve(__dirname, '..','..', 'frontend/dist')));

app.listen(PORT, () => {console.log(`Listening on port: ${PORT}`)});

app.get('/api/cities', (req, res) => {
  findCities((err, docs) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(docs);
    }
  });
});

app.post('/api/cities', (req, res) => {
  const name = req.body;
  saveCity(name, (err) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(201).send();
    }
  });
});
