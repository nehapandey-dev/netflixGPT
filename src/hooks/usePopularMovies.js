import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { addPopularMovies } from '../utils/moviesSlice'
import { API_OPTION } from '../utils/constant'

function UsePopularMovies() {
    const dispatch = useDispatch()
    const getPopularMovies = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1',API_OPTION)       
        const json = await data.json()
        // console.log(json);
        dispatch(addPopularMovies(json.results))
      }
      useEffect(()=>{
        getPopularMovies()
      },[])
  
}

export default UsePopularMovies
