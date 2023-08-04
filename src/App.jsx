import { useState, useEffect } from 'react';
import Form from './Form';
import List from './List';

import './App.css';

function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/';
  const [data, setData] = useState([]);
  const [endPoint, setEndPoint] = useState('users');
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${API_URL}${endPoint}`);
        if (!response.ok) throw Error('Error receiving data');
        const myData = await response.json();
        setData(myData);
        setFetchError(null);
      } catch (error) {
        setFetchError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [endPoint]);

  return (
    <>
      <Form endPoint={endPoint} setEndPoint={setEndPoint} />
      {isLoading && <p>Loading data...</p>}
      {fetchError && <p>{fetchError}</p>}
      {!fetchError && !isLoading && <List data={data} />}
    </>
  );
}

export default App;
