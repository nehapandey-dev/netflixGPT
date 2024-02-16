import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from '@firebase/auth';
import { API_OPTION } from '../utils/constant';
import { addNowPlayingMovies } from '../utils/moviesSlice';
import { auth } from '../utils/firebase';

function UseNowPlayingMovies() {
    const dispatch = useDispatch()
    const naviagte = useNavigate()
    const getNowPlayingMovies = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTION)
        const json = await data.json()
        // console.log(json);
        dispatch(addNowPlayingMovies(json.results))
      }
      useEffect(()=>{
        getNowPlayingMovies()
      },[])
      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const { uid, email, dispalyName, photoURL } = user;
            dispatch(addUser({
              uid: uid,
              email: email,
              dispalyName: dispalyName,
              photoURL: photoURL
            }))
            naviagte('/browsepage')
          } else {
            dispatch(removeUser)
            naviagte('/')
          }
        });
        // unsubscribe when component unmounts
        return () => unsubscribe()
      }
        , [])
}

export default UseNowPlayingMovies
