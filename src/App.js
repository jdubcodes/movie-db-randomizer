import {useEffect, useState} from 'react'
import Movie from './components/Movie';
import Filters from './components/Filters';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

function App() {

  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [unique, setUnique] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    fetchAllMovies();
  },[]);

  const fetchAllMovies = async () => {
    // Fetch trending movies from themoviedb.org
    const trendingData = await fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=f90b1cd271cd92b5e20663e52ddf51a4');
    const trendingMovies = await trendingData.json();
    setTrending(trendingMovies.results);
    // Fetch popular movies from themoviedb.org
    const popularData = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=f90b1cd271cd92b5e20663e52ddf51a4&language=en-US&page=1');
    const popularMovies = await popularData.json();
    setPopular(popularMovies.results);
    // Fetch top rated movies from themoviedb.org
    const topRatedData = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=f90b1cd271cd92b5e20663e52ddf51a4&language=en-US&page=1');
    const topRatedMovies = await topRatedData.json();
    setTopRated(topRatedMovies.results);
    // Combine all API data into one array
    const filtered = trendingMovies.results.concat(popularMovies.results, topRatedMovies.results);
    // Create new Set object to filter API data duplicates
    const filteredMovies = new Set();
    // Pull only movies with unique id's
    const uniqueMovies = filtered.filter(movie => {
      const duplicate = filteredMovies.has(movie.id);
      filteredMovies.add(movie.id);
      return !duplicate;
    });
    // Set only unique movies to filtered state
    setFiltered(uniqueMovies);
    setUnique(uniqueMovies);
    console.log(uniqueMovies);
  }


  return (
    <div className="App">
      <h1>Top Movies</h1>
      <Filters 
        trending={trending}
        popular={popular}
        topRated={topRated}
        unique={unique} 
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
