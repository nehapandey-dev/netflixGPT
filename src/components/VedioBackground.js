import React, { useEffect } from 'react'
// import { useSelector } from 'react-redux'


function VedioBackground() {
//    const trailerVideo = useSelector((store)=>store.movies?.trailerVideo)
    // fetch trailer vedio
   
    return (
        <div className='w-full'>
            <iframe 
            className='w-screen aspect-video'
            src={"https://www.youtube.com/embed/7u3zBVAxx_w?si=V7kboC2Sf1zVn_1j&autoplay=1&mute=1"} 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen></iframe>
        </div>
    )
}

export default VedioBackground