import React from 'react'
import MovieList from '../components/MovieList'
import { useSelector } from 'react-redux'

function SecondaryContainer() {
    const movies = useSelector((store) => store.movies)
    // console.log(movies);
    return (
        <div className='bg-black'>
            <div className='-mt-52 pl-12 relative z-20 text-white'>
                <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />

                <MovieList title={"Popular"} movies={movies?.popularMovies} />

                <MovieList title={"Trending"} movies={movies?.nowPlayingMovies} />

                <MovieList title={"Horor"} movies={movies?.nowPlayingMovies} />
            </div>

        </div>
    )
}

export default SecondaryContainer
