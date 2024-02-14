
import React from 'react'

import { Link } from 'react-router-dom'
import { logo } from '../utils/constant'


export default function Header() {
 
  return (
    <div className='absolute  w-full bg-gradient-to-tr from-black h-screen '>
    <div className=' px-20 py-2 bg-gradient-to-br from-black flex justify-between'>
        <img src={logo} 
        alt='logo' 
        className='w-38 h-20'/>
       <div className='py-4'>
       <select className='bg-black text-white p-2 w-32 border border-border rounded-md'>
            <option className='bg-black text-white '>English</option>
            <option>Hindi</option>
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
