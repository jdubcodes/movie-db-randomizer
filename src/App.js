import {useEffect, useState} from 'react'
import Movie from './components/Movie';
import Filters from './components/Filters';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

function App() {

  const [trending, setTrending] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    fetchTrending();
  },[]);

  const fetchTrending = async () => {
    const trendingData = await fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=f90b1cd271cd92b5e20663e52ddf51a4')
    const trendingMovies = await trendingData.json();
    setTrending(trendingMovies.results);
    setFiltered(trendingMovies.results);
  }

  return (
    <div className="App">
      <h1>What To Watch</h1>
      <Filters 
        trending={trending} 
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre} 
      />
      <motion.div 
      layout
      transition={{ duration: 1 }}
      className="movies"
      >
        <AnimatePresence>
          {filtered.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
