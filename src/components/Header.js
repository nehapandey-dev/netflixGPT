
import React from 'react'

import { Link } from 'react-router-dom'
import { Supported_Languages, logo } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { changeLanguage } from '../utils/configSlice'


export default function Header() {
  const dispatch = useDispatch()
 const handleLanguageChange =(e)=>{
dispatch(changeLanguage(e.target.value))
 }
  return (
    <div className='absolute  w-screen bg-gradient-to-tr from-black h-screen '>
    <div className=' px-20 py-2 bg-gradient-to-br from-black flex flex-col md:flex-row  md:justify-between bg-blck '>
        <img src={logo} 
        alt='logo' 
        className='w-44 mx-auto md:mx-0'/>
       <div className='py-4'>
        <select className='p-2 bg-gray-800 text-white m-2' onChange={handleLanguageChange}>
        {Supported_Languages.map(lang=>
          <option key={lang.identifier} className='bg-black text-white ' value={lang.identifier}>{lang.name}</option>)}
        </select>     
        <Link to={'/signin'}><button className='bg-red text-white p-2 w-24 mx-3 rounded-md'>Sign In</button></Link>
       </div>
    </div>
    <div className='text-white m-auto text-center py-40  bg-transparent'>
        <h1 className='text-6xl font-semibold'>Unlimited movies , TV shows and more</h1>
        <h3 className='py-3'>Watch anywhere. Cancel anytime.</h3>
        <p className='py-3'>ready to watch? enter your to create or restart your membership</p>
        <input
          type='text'
          placeholder='Email address'
          className='w-96 p-3 bg-transparent bg-gradient-to-br bg-gr from-black text-white border border-border rounded-md'
        />
        <Link to={'/signup'}><button className='bg-red text-white p-3 w-48 mx-3 rounded-md'>Get Started</button></Link>
      </div> 
    </div>
  )
}
