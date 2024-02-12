import './App.css';

import React from 'react';
import GetData from './getdata';
import GetAlldata from './getalldata'
import Postdata from './postdata'
import Getspecificdata from './getspecificdata';
function App() {
  return (
    <div>
      <GetData />
      <GetAlldata />
      <Postdata />
      <Getspecificdata />
     
    </div>
  );
}

export default App;



