import React from 'react'
import Header from './Header'
import { BG_URL } from '../utils/constant'


function Login() {
  return (

    <div className='bg-transparent'>
      <Header />
      <img src={BG_URL} alt='main' />
    </div>

  )
}

export default Login