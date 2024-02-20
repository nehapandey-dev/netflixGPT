import React from 'react'
import GptSearchBar from '../components/GptSearchBar'
import GptMovieSuggestion from '../components/GptMovieSuggestion'
import { BG_URL } from '../utils/constant'

function GPTSearch() {
    return (
        <div className='bg-transparent'>
            <div className='fixed -z-10 '>
                <img src={BG_URL} alt='main' />
            </div>
            <GptSearchBar />
            <GptMovieSuggestion />
        </div>
    )
}

export default GPTSearch
