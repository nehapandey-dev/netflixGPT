import React from 'react'
import lang from '../utils/language'
import { useSelector } from 'react-redux'

function GptSearchBar() {
    const langKey = useSelector(store=>store.config.lang)
    return (
        <div className='bg-transparent'>
            <div className='relative top-52 bg-transparent flex justify-center'>
            <form className='w-1/2 bg-black grid grid-cols-12'>
                <input
                type='search'
                className='p-4 m-4 col-span-9'
                placeholder={lang[langKey].gptSearchPlaceholder}
                />
                <button className='py-2 px-4 bg-red text-white rounded-lg col-span-3 m-4'>{lang[langKey].search}</button>
            </form>
        </div>
        </div>
    )
}

export default GptSearchBar
