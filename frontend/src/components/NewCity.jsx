import React, { useState } from 'react';
import axios from 'axios';

const NewCity = ({ fetchCities }) => {
  const [newCity, setNewCity] = useState('');

  const handleChange = (e) => {
    setNewCity(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/cities', {name: newCity})
      .then(() => setNewCity(''))
      .then(() => fetchCities())
      .then(() => alert('New city added'))
      .catch(err => console.log(err))
  }

  return (
    <form>
      <input type='text' placeholder='City, State' onChange={handleChange} value={newCity}/>
      <button onClick={handleSubmit}>+</button>
    </form>
  )
}

export default NewCity;
