import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTION } from '../utils/constant'
import { addTrailorVideo } from '../utils/moviesSlice'

function UseMovieTrailor() {
    const dispatch = useDispatch()

    const getMovieVedios = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/933131/videos?language=en-US', API_OPTION)
        const json = await (data.json())
        console.log(json);
        const trailer = json.results.filter(video => video.type === "Trailer")
        console.log(trailer);
        dispatch(addTrailorVideo(trailer))
    }
    useEffect(() => {
        getMovieVedios()
    }, [])

}

export default UseMovieTrailor
