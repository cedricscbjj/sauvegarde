import React, { useState } from 'react';
import axios from 'axios';
import './index.css';


const Getspecificdata = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/datalinks?theme1=${searchTerm}`);
      const data = response.data;
      setSearchResults(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };





  return (
    <div class="container">

<h1>Getspecificdata</h1>


<p>Pour créer une liste en React, vous pouvez utiliser la fonction map() pour parcourir un tableau de données et renvoyer un élément JSX pour chaque élément du tableau. Voici un exemple simple de création d'une liste de noms :</p>
<ul>
    <li>poney</li>
<li>chaton</li>
<li>fourmi</li>
<li>renard</li>
<li>dinosaure</li>
<li>lapin</li>
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
  )
}
export default Getspecificdata
