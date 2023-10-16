import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState("");
  const [song, setSong] = useState([]);
  const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${value}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '3b63b8a9a6msh425c9a6cce7556fp1d2331jsnf2540b30c6b2',
      'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
    }
  };

  function getSuggestions() {
    fetch(url, options)
      .then(response => response.json())
      .then(jsonResponse => {
        const songTitles = jsonResponse.data.map(item => item.title);
        setSong(songTitles);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }

  function handleClick(e) {
    e.preventDefault();
    getSuggestions();
  }

  function handleChange(e) {
    const newValue = e.target.value;
    setValue(newValue);
  }

  useEffect(() => {
    // You can do something when the component mounts here if needed
  }, []);

  return (
    <div>
      <h1>Jamming</h1>
      <form onSubmit={handleClick}>
        <label htmlFor="searchInput">Search</label>
        <input type="text" id="searchInput" value={value} onChange={handleChange} placeholder='Enter here...' />
        <button type="submit">Search</button>
      </form>
      <h2>Songs</h2>
      {song && (
        <ul>
          {song.map((title, index) => (
            <li key={index}>{title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
