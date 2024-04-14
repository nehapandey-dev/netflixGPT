import React from 'react'
import MovieCards from './MovieCards'

function MovieList({ title, movies }) {
    // console.log(movies);
    return (
        <div className='px-6'>
            <h1 className='text-lg md:text-3xl py-6'>{title}</h1>

            <div className='flex gap-2 overflow-x-scroll'>
                <div className='flex '>
                    {movies?.map(movie => 
                        (<MovieCards key={movie.id} posterPath={movie.poster_path} />
                        ))}
                </div>
            </div>
        </div>
    )
}

export default MovieList
