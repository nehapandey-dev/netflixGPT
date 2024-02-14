import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { signOut } from "firebase/auth";
import { useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { onAuthStateChanged } from '@firebase/auth';
import { API_OPTION } from '../utils/constant';
import { addNowPlayingMovies } from '../utils/moviesSlice';
import MainContainer from './MainContainer';


function BrowesPage() {
  const dispatch = useDispatch()
  const naviagte = useNavigate()
  const user = useSelector((store) => store.user)
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.

    }).catch((error) => {
      // An error happened.

    });
  }
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
  return (
    <div >
      <div className='absolute  w-full from-black h-screen '>
        <div className=' px-20 py-2 bg-gradient-to-br from-black flex justify-between'>
          <img src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
            alt='logo'
            className='w-38 h-20' />
          <div className='py-4 flex'>
            <img src={user.photoURL} alt='' className='w-12 h-12 rounded-lg' />
            <button className='bg-red text-white p-2 w-24 mx-3 rounded-md' onClick={handleSignOut}>Sign Out</button>
          </div>
        </div>
      </div>
      <div className='bg-white'>
      <MainContainer/>
      </div>
    </div>
  )
}

export default BrowesPage