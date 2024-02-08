import './App.css';
import { useEffect } from 'react';
import fetchTrendImages from './API/FilmsApi';
import { useState } from 'react';
import MoviesList from './moviesList/MoviesList';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchTrendImages();
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <MoviesList data={data}/>
    </>
  );
}

export default App;
