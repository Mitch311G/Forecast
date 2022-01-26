import React from 'react';

const Weather = ({ weatherData }) => {
  return(
    <div className='weather'>
      <div className='header'>{weatherData.name}</div>
      <div className='temp'>{Math.round(weatherData.main.temp)}&deg;</div>
      {/* <div className='feels'> Feels like {weatherData.main.feels_like}</div> */}
      <div className='description'>{weatherData.weather[0].description}</div>
      <div className='min_max'>
        <span className='high'>H:{Math.round(weatherData.main.temp_min)}&deg;</span>
        <span className='low'>L:{Math.round(weatherData.main.temp_max)}&deg;</span>
      </div>

      <div className='details'>
        <div>Humidity {weatherData.main.humidity}%</div>
        <div>Wind {Math.round(weatherData.wind.speed)}mph</div>
        <div>Feels like {Math.round(weatherData.main.feels_like)}&deg;</div>
        <div className='sun_up'>
          Sunrise {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN',{hour:'2-digit', minute:'2-digit'})}
        </div>
        <div className='sun_down'>
          Sunset {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN',{hour:'2-digit', minute:'2-digit'})}
        </div>
      </div>
    </div>
  )
}

export default Weather;
