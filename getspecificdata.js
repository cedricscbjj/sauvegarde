

import './App.css';

import React, { useState } from 'react';
import axios from 'axios';

const Getspecificdata = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:3405/datalinks?theme1=${searchTerm}`);
      const data = response.data;
      setSearchResults(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div   id="specific">


<h1>Liste des tag theme1</h1>

<ul>
    <li>covid</li>
    <li>ingerence</li>
    <li>lgbt</li>
    <li>woke</li>
    <li>manipulation</li>
    <li>israel</li>
    <li>islam</li>
    <li>zetetique</li>
    <li>juif</li>
    <li>nwo</li>
    <li>metissage</li>
    <li>twitter</li>
    <li>p3d0</li>
</ul>



      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      
      {searchResults.length > 0 && (
        <div id="resultofresearch">
          <h2>Search Results:</h2>
          {searchResults.map((item) => (
            <div key={item._id}>
              <h3>{item.lien}</h3>
              <p>{item.description}</p>
              <p>{item.theme1}</p>
              <p>{item.theme2}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Getspecificdata;


/* <ul>
    <li>covid</li>
    <li>ingerence</li>
    <li>lgbt</li>
    <li>woke</li>
    <li>manipulation</li>
    <li>israel</li>
    <li>islam</li>
    <li>zetetique</li>
    <li>juif</li>
    <li>nwo</li>
    <li>metissage</li>
    <li>twitter</li>
    <li>p3d0</li>
</ul>
*/