import React from 'react'

function VedioTitle({title,overview}) {
    return (
        <div className='w-screen aspect-video pt-[32%] md:pt-[10%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black '>
            <h1 className='text-2xl md:text-5xl'>{title}</h1>
            <p className='hidden md:inline-block md:py-6 text-lg w-1/4'>{overview}</p>
            <div className='my-4 md:my-0'>
                <button className='text-black bg-white px-4 md:px-12 text-lg p-1 md:p-2 hover:bg-opacity-80 rounded-lg'>▶︎ Play</button>
                <button className='mx-2 text-white bg-gray-500 px-4 md:px-12 text-lg p-1 md:p-2 bg-opacity-50 hover:bg-opacity-80 rounded-lg'>ⓘ More Info</button>
            </div>
        </div>
    )
}

export default VedioTitle

