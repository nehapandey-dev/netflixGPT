import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPopularMovies } from '../utils/moviesSlice'
import { API_OPTION } from '../utils/constant'

function UsePopularMovies() {
    const dispatch = useDispatch()
    const popularMovies = useSelector(store=>store.movies.popularMovies)
    const getPopularMovies = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1',API_OPTION)       
        const json = await data.json()
        // console.log(json);
        dispatch(addPopularMovies(json.results))
      }
      useEffect(()=>{
        if(!popularMovies)
        getPopularMovies()
      },[])
  
}

export default UsePopularMovies
