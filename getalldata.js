import React, { useState } from 'react';
import axios from 'axios';
import './index.css';

function Getalldata() {

  const [data, setData] = useState([]);

  const fetchData = async () => {
    const result = await axios('http://localhost:3000/datalinks');
    setData(result.data);
  };




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
  )
}
export default Getalldata
