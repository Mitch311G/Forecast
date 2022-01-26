import React from 'react';

const Dropdown = ({ cities, fetchCityWeather }) => {
  const handleChange = (e) => {
    cityName = e.target.value
    if (cityName === 'My Cities') {return;}
    fetchCityWeather(cityName)
  }

  return (
    <select className='dropdown' onChange={handleChange}>
      <option value={'My Cities'}>My Cities</option>
      {cities.map((city) => {
        return (
          <option value={city.name}>{city.name}</option>
        )
      })}
    </select>
  )
}

export default Dropdown;
