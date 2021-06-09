import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

const App = () => {
  useEffect(() => {
      const getAPI = () => {
          // Change this endpoint to whatever local or online address you have
          // Local PostgreSQL Database
          const API = 'http://127.0.0.1:5000/';

          fetch(API)
              .then((response) => {
                  console.log(response);
                  return response.json();
              })
              .then((data) => {
                  console.log(data);
                  setLoading(false);
                  setApiData(data);
              });
      };
      getAPI();
  }, []);
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  return (
    <>
    <header>Pet Hotel</header>
    <PetForm />
    </>
  );
}

export default App;
