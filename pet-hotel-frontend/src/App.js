import './App.css';
import { useState, useEffect } from 'react';

export default function App() {

  // Hook holds API data from python server
  const [apiData, setApiData] = useState([]);

  // Function to get API data from python server
  const getApi = () => {

    // Py server running on local host 5000
    const API = 'http://127.0.0.1:5000/';

    // HTTP request to PY server
    fetch(API)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setApiData(data);
      });

  }

  // On page load fire function getApi 
  useEffect(() => {
    getApi();
  }, []);

  return (
    <div>
      <h2>Pet Hotel</h2>

      <div align="center">
        <table>

          {/* Table Header */}
          <thead>
            <tr>
              <th>Owner</th>
              <th>Pet</th>
              <th>Breed</th>
              <th>Color</th>
              <th>Check in?</th>
              <th>Actions</th>
            </tr>
          </thead>

          {/* Table Rows */}
          <tbody>
            {apiData.map(pet => (
              <tr key={pet.pet_id}>
                <td>{pet.owner_name}</td>
                <td>{pet.name}</td>
                <td>{pet.breed}</td>
                <td>{pet.color}</td>
                <td>{pet.checked_in}</td>
                <td><button>Check In</button> <button>Remove</button></td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  )
}
