import { motion } from 'framer-motion';

function Movie({ movie }) {
    return(
        <motion.div 
            layout
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
        >
            <h2 className="movie-title">{movie.title}</h2>
            <img className="movie-poster" src={'https://image.tmdb.org/t/p/w500' + movie.backdrop_path} alt="" />
        </motion.div>
    )
}

export default Movie;