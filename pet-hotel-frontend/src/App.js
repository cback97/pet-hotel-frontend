import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function App() {

  // Hook holds API data from python server
  const [pets, setPets] = useState([]);

  // Function to get API data from python server
  const getApi = () => {

    // HTTP request to PY server
    axios.get('/api/pets')
      .then((response) => {
        console.log(response);
        setPets(response.data)
      })
      .catch(err => {
        console.log(err);
      })

  }

  // On page load fire function getApi 
  useEffect(() => {
    getApi();
  }, []);

  return (
    <div>
      <h2>Pet Hotel</h2>

      <div align="center">
        <h2>History</h2>
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
            {pets.map(pet => (
              <tr key={pet.id}>
                <td>{pet.name}</td>
                <td>{pet.pet_name}</td>
                <td>{pet.breed}</td>
                <td>{pet.color}</td>
                <td>{String(pet.checked_in)}</td>
                <td><button>Check In</button> <button>Remove</button></td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  )
}
