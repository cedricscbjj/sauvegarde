// Import React and the useState hook
import React, { useState } from 'react';

// Define a functional component called GetData
function GetData() {

  // Declare two state variables using the useState hook
  const [id, setId] = useState(''); // id will hold the value of the ID input field
  const [datalink, setDatalink] = useState(null); // datalink will hold the response data from the server

  // Define a function to handle the form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from submitting normally

    // Send a GET request to the backend API using the fetch method
    // We interpolate the value of the ID input field into the URL string
    fetch(`http://localhost:3405/datalinks/${id}`)
      .then(response => response.json()) // Convert the response to JSON format
      .then(data => setDatalink(data)); // Update the datalink state variable with the response data
  };

  // Return the JSX elements that make up the component's UI
  return (
    <div>
      <h2>Récupérer un lien de données par ID :</h2>
      <form onSubmit={handleSubmit}>
        <label>
          ID :
          <input type="text" value={id} onChange={(event) => setId(event.target.value)} />
        </label>
        <button type="submit">Récupérer</button>
      </form>
      {datalink && (
        <div>
          <p>Lien : {datalink.lien}</p>
          <p>Description : {datalink.description}</p>
          <p>Theme 1 : {datalink.theme1}</p>
          <p>Theme 2 : {datalink.theme2}</p>
        </div>
      )}
    </div>
  );
}

// Export the component as the default export
export default GetData;
