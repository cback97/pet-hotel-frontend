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
      {JSON.stringify(apiData)}
    </div>
  )
}
