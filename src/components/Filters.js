import {useEffect} from 'react';

const Filters = ({ setActiveGenre, activeGenre, setFiltered, unique }) => {
    useEffect(() => {
        if(activeGenre === 0) {
            setFiltered(unique);
            return;
        }
        const filtered = unique.filter((movie) => 
            movie.genre_ids.includes(activeGenre)
        );
        setFiltered(filtered);
    }, [activeGenre]);

    return(
        <div className="filters">
            <button onClick={() => setActiveGenre(0)}>All</button>
            <button onClick={() => setActiveGenre(28)}>Action</button>
            <button onClick={() => setActiveGenre(12)}>Adventure</button>
            <button onClick={() => setActiveGenre(35)}>Comedy</button>
            <button onClick={() => setActiveGenre(80)}>Crime</button>
            <button onClick={() => setActiveGenre(99)}>Documentary</button>
            <button onClick={() => setActiveGenre(18)}>Drama</button>
            <button onClick={() => setActiveGenre(10751)}>Family</button>
            <button onClick={() => setActiveGenre(14)}>Fantasy</button>
            <button onClick={() => setActiveGenre(27)}>Horror</button>
            <button onClick={() => setActiveGenre(9648)}>Mystery</button>
            <button onClick={() => setActiveGenre(10749)}>Romance</button>
            <button onClick={() => setActiveGenre(878)}>Science Fiction</button>
            <button onClick={() => setActiveGenre(53)}>Thriller</button>
        </div>
    )
}

export default Filters;