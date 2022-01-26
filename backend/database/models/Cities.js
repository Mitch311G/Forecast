const mongoose = require('mongoose');

const citiesSchema = new mongoose.Schema({
  name: String
});

const Cities = mongoose.model('Cities', citiesSchema);

module.exports = Cities;