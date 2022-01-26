import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { API_KEY, API_URL } from '../config/config.js';
import Weather from './Weather.jsx';
import moment from 'moment';


const App = () => {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [weatherData, setWeatherData] = useState([]);

  function fetchLocalWeather() {
    navigator.geolocation.getCurrentPosition((position) => {
      const newLat = position.coords.latitude;
      const newLong = position.coords.longitude;
      setLat(newLat);
      setLong(newLong);

      axios.get(`${API_URL}/weather?`, {
        params: {
          lat: newLat,
          lon: newLong,
          appid: API_KEY,
          units: 'imperial'
        }
      })
      .then(result => {setWeatherData(result.data)})
    });
  }

  useEffect(() => {
    fetchLocalWeather()
  }, [])

  return (
    <div>
      <div class="pageHeader">
        <span>FORECAST</span>
        <div className='today'>
        <div className='day'>{moment().format('dddd')}</div>
        <div>{moment().format('LL')}</div>
        </div>
      </div>
      {(typeof weatherData.main != 'undefined')
        ? <Weather weatherData={weatherData} />
        : <div className='loading'>LOADING...</div>
      }
    </div>
  )
}

export default App;