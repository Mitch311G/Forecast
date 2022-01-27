import React from 'react';

const Weather = ({ weatherData }) => {
  return(
    <div className='weather'>
      <div className='header'>{weatherData.name}</div>
      <div className='temp'>{Math.round(weatherData.main.temp)}&deg;</div>
      <div className='description'>{weatherData.weather[0].description}</div>
      <div className='min_max'>
        <span className='high'>H:{Math.round(weatherData.main.temp_min)}&deg;</span>
        <span className='low'>L:{Math.round(weatherData.main.temp_max)}&deg;</span>
      </div>

      <div className='details'>

        <div className='humidity square'>
          <div>Humidity</div>
          <div>{weatherData.main.humidity}%</div>
        </div>

        <div className='wind square'>
          <div>Wind</div>
          <div>{Math.round(weatherData.wind.speed)} mph</div>
        </div>

        <div className='feelsLike square'>
          <div>Feels like</div>
          <div>{Math.round(weatherData.main.feels_like)}&deg;</div>
        </div>

        <div className='sun_up square'>
          <div>Sunrise</div>
          <div>
            {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN',{hour:'2-digit', minute:'2-digit'})}
          </div>
        </div>

        <div className='sun_down square'>
          <div>Sunset</div>
          <div>
            {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN',{hour:'2-digit', minute:'2-digit'})}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Weather;
