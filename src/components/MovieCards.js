import React from 'react'
import {IMG_CDN_URL} from '../utils/constant'

function MovieCards({posterPath}) {
    return (
        <div className='w-48 pr-4'>
            <img src={IMG_CDN_URL + posterPath} alt='Movie_card'/>
        </div>
    )
}

export default MovieCards
