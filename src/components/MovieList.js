import React from 'react'
import MovieCards from './MovieCards'

function MovieList({ title, movies }) {
    // console.log(movies);
    return (
        <div className='p-6'>
            <div>
                <h1 className='text-3xl py-4'>{title}</h1>
            </div>
            <div className='flex overflow-x-scroll'>
                {movies?.map(movie => <MovieCards key={movie?.id} posterPath={movie?.poster_path} />)}
            </div>
        </div>
    )
}

export default MovieList
