import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Weather from './Weather.jsx';
import moment from 'moment';
import Dropdown from './Dropdown.jsx';
import NewCity from './Newcity.jsx';

const App = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [cities, setCities] = useState([]);

  function fetchLocalWeather() {
    navigator.geolocation.getCurrentPosition((position) => {
      const newLat = position.coords.latitude;
      const newLong = position.coords.longitude;

      axios.get(`${process.env.API_URL}/weather?`, {
        params: {
          lat: newLat,
          lon: newLong,
          appid: process.env.API_KEY,
          units: 'imperial'
        }
      })
      .then(result => setWeatherData(result.data))
    });
  }

  const fetchCities= () => {
    axios.get('/api/cities')
      .then(result => setCities(result.data))
  }

  const fetchCityWeather = (cityName) => {
    axios.get(`${process.env.API_URL}/weather?`, {
      params: {
        q: cityName,
        appid: process.env.API_KEY,
        units: 'imperial'
      }
    })
    .then(result => setWeatherData(result.data))
  }

  useEffect(() => {
    fetchLocalWeather()
    fetchCities()
  }, [])

  return (
    <div>
      <div className='pageHeader'>
        <span className='logo'>FORECAST</span>
        <i className='fas fa-cloud-sun'></i>
        <div className='today'>
          <div className='day'>{moment().format('dddd')}</div>
          <div>{moment().format('LL')}</div>
        </div>
      </div>

      <NewCity fetchCities={fetchCities}/>
      <Dropdown cities={cities} fetchCityWeather={fetchCityWeather} fetchLocalWeather={fetchLocalWeather}/>

      {(typeof weatherData.main != 'undefined')
        ? <Weather weatherData={weatherData} />
        : <div className='loading'>LOADING...</div>
      }
    </div>
  )
}

export default App;
