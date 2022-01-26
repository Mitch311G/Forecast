import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { API_KEY, API_URL } from '../config/config.js';
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

      axios.get(`${API_URL}/weather?`, {
        params: {
          lat: newLat,
          lon: newLong,
          appid: API_KEY,
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
    axios.get(`${API_URL}/weather?`, {
      params: {
        q: cityName,
        appid: API_KEY,
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
      <div className="pageHeader">
        <span>FORECAST</span>
        <div className='today'>
          <div className='day'>{moment().format('dddd')}</div>
          <div>{moment().format('LL')}</div>
        </div>
      </div>

      <Dropdown cities={cities} fetchCityWeather={fetchCityWeather} fetchLocalWeather={fetchLocalWeather}/>
      <NewCity fetchCities={fetchCities}/>

      {(typeof weatherData.main != 'undefined')
        ? <Weather weatherData={weatherData} />
        : <div className='loading'>LOADING...</div>
      }
    </div>
  )
}

export default App;