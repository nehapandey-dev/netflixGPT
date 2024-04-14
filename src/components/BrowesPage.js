import React from 'react'
import { auth } from '../utils/firebase';
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import MainContainer from './MainContainer';
import UseNowPlayingMovies from '../hooks/useNowPlayingMovies';
import UsePopularMovies from '../hooks/usePopularMovies';
import GPTSearch from './GPTSearch';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';
import { Supported_Languages } from '../utils/constant';

function BrowesPage() {
  UseNowPlayingMovies()
  UsePopularMovies()
  const dispatch = useDispatch()
  const showGptSearch = useSelector(store=>store.gpt.showGptSearch)
  const user = useSelector((store) => store.user)
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.

    }).catch((error) => {
      // An error happened.

    });
  }
const handleGptSearchClick =()=>{
  dispatch(toggleGptSearchView())
}

const handleLanguageChange =(e)=>{
dispatch(changeLanguage(e.target.value))
}
  return (
    <div className='bg-transparent'>
      <div className='absolute  px-20 py-2 bg-gradient-to-b from-black z-10 w-screen flex flex-col md:flex-row  md:justify-between'>

        <img src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
          alt='logo'
          className='w-44 mx-auto md:mx-0' />
        <div className='py-4 flex'>
          {showGptSearch && (
            <select className='p-2 bg-gray-800 text-white m-1 h-12 rounded-lg' onChange={handleLanguageChange}>
            {Supported_Languages.map(lang=>
              <option key={lang.identifier} className='bg-black text-white ' value={lang.identifier}>{lang.name}</option>)}
            </select> 
          )}
         
          <button className='p-2 px-4 mx-2 bg-purple-800 text-white w-32 h-12 rounded-lg'
          onClick={handleGptSearchClick}
          >
            {showGptSearch? "Homepage" : "GPT Search"}
            </button>
          <img src={user.photoURL} alt='' className='w-12 h-12 rounded-lg' />
          <button className='bg-red text-white p-2 w-24 h-12 mx-3 rounded-md' onClick={handleSignOut}>Sign Out</button>
        </div>

      </div>
      <div className=''>
        {showGptSearch? <GPTSearch/>:<MainContainer />}       
      </div>
    </div>
  )
}

export default BrowesPage