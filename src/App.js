import React, { useEffect, useState } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar';
import SearchResults from './Components/SearchResults';
import {getPlaylist} from './Components/Playlist';

function App() {
  const [value, setValue] = useState("");
  const [song, setSong] = useState([]);
  const [artist, setArtist] = useState([]);
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

  function getArtist() {
    fetch(url, options)
      .then(response => response.json())
      .then(jsonResponse => {
        const songArtist = jsonResponse.data.map(item => item.artist.name);
        setArtist(songArtist);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }


  function handleClick(e) {
    e.preventDefault();
    getSuggestions();
    getArtist();
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
      <SearchBar value = {value} handleChange = {handleChange} handleClick = {handleClick}/>
      <SearchResults song = {song} getPlaylist = {getPlaylist}/>
    </div>
  );
}

export default App;