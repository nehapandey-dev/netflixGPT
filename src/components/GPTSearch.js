import React from 'react'
import GptSearchBar from '../components/GptSearchBar'
import GptMovieSuggestion from '../components/GptMovieSuggestion'
import { BG_URL } from '../utils/constant'

function GPTSearch() {
    return (
        <div className='bg-transparent'>
            <div className='absolute -z-10 bg-transparent'>
            <img src={BG_URL} alt='main' />
            </div>
            <GptSearchBar/>
            <GptMovieSuggestion/>
        </div>
    )
}

export default GPTSearch
