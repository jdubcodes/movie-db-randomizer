import {useEffect} from 'react';

const Filters = ({ setActiveGenre, activeGenre, setFiltered, trending }) => {
    useEffect(() => {
        if(activeGenre === 0) {
            setFiltered(trending);
            return;
        }
        const filtered = trending.filter((movie) => 
            movie.genre_ids.includes(activeGenre)
        );
        setFiltered(filtered);
    }, [activeGenre]);

    return(
        <div className="filters">
            <button onClick={() => setActiveGenre(0)}>All</button>
            <button onClick={() => setActiveGenre(28)}>Action</button>
            <button onClick={() => setActiveGenre(35)}>Comedy</button>
        </div>
    )
}

export default Filters;