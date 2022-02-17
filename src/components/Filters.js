import {useEffect} from 'react';

const Filters = ({ setFiltered, filtered, unique, topRated, popular, trending, random }) => {
    useEffect(() => {
        setFiltered(unique);
    }, [filtered]);

    return(
        <div>
            <div className="filters">
                <button className="filter-button" onClick={() => setFiltered(unique)}>All</button>
                <button className="filter-button" onClick={() => setFiltered(popular)}>Popular</button>
                <button className="filter-button" onClick={() => setFiltered(topRated)}>Top Rated</button>
                <button className="filter-button" onClick={() => setFiltered(trending)}>Trending</button>
                <button className="randomize-button" onClick={() => setFiltered(random)}>Pick A Random Movie</button>
            </div>
        </div>
    )
}

export default Filters;