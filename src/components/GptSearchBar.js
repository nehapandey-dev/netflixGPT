import React, { useRef } from 'react'
import lang from '../utils/language'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openai'
import { API_OPTION } from '../utils/constant'
import { addGptMovieResult } from '../utils/gptSlice'

function GptSearchBar() {
    const dispatch = useDispatch()
    const langKey = useSelector(store => store.config.lang)
    const searchText = useRef(null)

    // search movie in TMDB
    const searchMovieTMDB = async (movie) => {
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' 
        + movie + 
        '&include_adult=false&language=en-US&page=1', API_OPTION)
        const json = await data.json()
        return json.results
    }

    const handleGptSearchClick = async () => {
        console.log(searchText.current.value);
        // make an API call to GPT API and get movie results
        const gptQuery = "act as a indian retro movie  recommondation system  and suggest some movie for the query" + searchText.current.value +
            "only give me names of 5 movies,comma seperated like the example result given ahead.Example Result : Gadar, Sholay, Don,Golmal,Koi mil gya"
        const gptResult = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
        });

        if (!gptResult.choices) {
            // todo write error handling here
        }
        console.log(gptResult.choices[0].message.content);
        const gptMovies = gptResult.choices[0].message.content.split(',')

        // for each movie will search TMDB API
        const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie))

        //Promis.all takes the array of promis array
        const tmdbResults = Promise.all(promiseArray)
        console.log(tmdbResults);
        dispatch(addGptMovieResult({movieNames : gptMovies, movieResults : tmdbResults}))
    }
    return (

        <div className='pt-[50%] md:pt-[20%] flex justify-center '>
            <form className='w-1/2 bg-black grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
                <input
                    ref={searchText}
                    type='text'
                    className='p-4 m-4 col-span-9'
                    placeholder={lang[langKey].gptSearchPlaceholder}
                />
                <button className='py-2 px-4 bg-red text-white rounded-lg col-span-3 m-4' onClick={handleGptSearchClick}>{lang[langKey].search}</button>
            </form>
        </div>

    )
}

export default GptSearchBar
