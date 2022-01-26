import React from 'react';

const Dropdown = ({ cities, fetchCityWeather, fetchLocalWeather }) => {
  const handleChange = (e) => {
    let cityName = e.target.value
    if (cityName === 'Local Weather') {
      fetchLocalWeather()
    } else {
      fetchCityWeather(cityName)
    }
  }

  return (
    <select className='dropdown' onChange={handleChange}>
      <option value={'Local Weather'}>Local Weather</option>
      {cities.map((city) => {
        return (
          <option value={city.name}>{city.name}</option>
        )
      })}
    </select>
  )
}

export default Dropdown;
