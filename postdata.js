import React, { useState } from 'react';
import './index.css';
import axios from 'axios';



const Postdata = () => {

  const [lien, setLien] = useState('');
  const [description, setDescription] = useState('');
  const [theme1, setTheme1] = useState('');
  const [theme2, setTheme2] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/datalinks', { lien, description, theme1, theme2 });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>

<div>bienvenue sur la page de sauvegarde de données</div>

<p> Vos contenus YouTube apparaissent ici. Il peut s'agir des vidéos que vous avez mises en ligne, des commentaires que vous avez ajoutés à des vidéos ou encore des chaînes auxquelles vous êtes abonné.

    
</p>


  


<form onSubmit={handleSubmit} className="form-container">
  <h1>Poster un lien</h1>
  <div className="form-group">
    <label htmlFor="lien">Lien:</label>
    <input type="text" id="lien" value={lien} onChange={(e) => setLien(e.target.value)} />
  </div>
  <div className="form-group">
    <label htmlFor="description">Description:</label>
    <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
  </div>
  <div className="form-group">
    <label htmlFor="theme1">Theme 1:</label>
    <input type="text" id="theme1" value={theme1} onChange={(e) => setTheme1(e.target.value)} />
  </div>
  <div className="form-group">
    <label htmlFor="theme2">Theme 2:</label>
    <input type="text" id="theme2" value={theme2} onChange={(e) => setTheme2(e.target.value)} />
  </div>
  <button type="submit">Submit</button>
</form>
</div>

  )
}
export default Postdata

