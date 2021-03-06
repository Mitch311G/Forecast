const Cities = require('../models/Cities.js');

const findCities = (callback) => {
  Cities.find({}, callback)
}

const saveCity = (name, callback) => {
  const doc = new Cities(name)
  doc.save(callback)
}

const deleteCity = (toDelete, callback) => {
  Cities.deleteOne(toDelete, callback)
}

module.exports = {
  findCities,
  saveCity,
  deleteCity
}