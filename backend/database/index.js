const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cityWeather')

const db = mongoose.connection

db.on('error', () => {
  console.log('mongoose conection error')
});

db.once('open', () => {
  console.log('mongoose connected successfully')
});

module.exports = db;