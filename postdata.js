import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const AddDataForm = () => {
  const [lien, setLien] = useState('');
  const [description, setDescription] = useState('');
  const [theme1, setTheme1] = useState('');
  const [theme2, setTheme2] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3405/datalinks', { lien, description, theme1, theme2 });
      console.log(response.data);
      // do something with response if needed
    } catch (error) {
      console.error(error);
    }
  };

  return (




    <form onSubmit={handleSubmit}>
      <h1> poster un lien</h1>
      <label>
        Lien:
        <input type="text" value={lien} onChange={(e) => setLien(e.target.value)} />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <label>
        Theme 1:
        <input type="text" value={theme1} onChange={(e) => setTheme1(e.target.value)} />
      </label>
      <label>
        Theme 2:
        <input type="text" value={theme2} onChange={(e) => setTheme2(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddDataForm;
