import React, { useState } from 'react';
import axios from 'axios';

function Getalldata() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const result = await axios('http://localhost:3405/datalinks');
    setData(result.data);
  };


  
  // le probleme du hook useEffect s'exécute après chaque rendu (ou re-rendu) du composant
  // le code à l'intérieur du hook useEffect appelait la fonction fetchData qui récupère toutes les données à partir de l'AP
  // Cela signifie que toutes les données étaient récupérées et stockées dans le state du composant à chaque rendu
  //useEffect(() => {
  //  fetchData();
  //}, []);

  return (
    <div class="getalldata">
      <button onClick={() => fetchData()}>Afficher  toute les données</button>
      <div>
        {data.map((item) => (
          <div key={item._id}>
              <p>Lien : {item.lien}</p>
          <p>Description : {item.description}</p>
          <p>Theme 1 : {item.theme1}</p>
          <p>Theme 2 : {item.theme2}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Getalldata;
