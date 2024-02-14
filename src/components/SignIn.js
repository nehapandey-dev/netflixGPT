import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import checkValidData from '../utils/Validate'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router';

function SignIn() {
    // const [isSignInForm, setIsSignInForm] = useState(true)
    const [errorMsg, setErrorMsg] = useState(null)
    const email = useRef(null)
    const password = useRef(null)
    const naviagte = useNavigate()

    const handleButtonClick = () => {

        // console.log(email.current.value);
        // console.log(password.current.value);
        const message = checkValidData(email.current.value, password.current.value)
        setErrorMsg(message)
        if (message) return;

        //signin logic here 
        const userLogin = signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                naviagte('/browsepage')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMsg(errorCode + "-" + errorMessage)
            }); return userLogin   

    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className='w-full'>
            <div className='w-4/12 h-[590px] mx-96 my-32 absolute  m-auto  bg-black bg-opacity-70 text-white text-center'>

                <h1 className='text-3xl text-left px-12 py-5'>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            ref={email}
                            type='text'
                            placeholder='Email or phone number'
                            className='w-80 p-4  bg-gray-900 bg-opacity-80 text-white border border-border rounded-md'
                        />

                    </div>
                    <div>
                        <input
                            ref={password}
                            type='password'
                            placeholder='password'
                            className='w-80 p-4 bg-gray-900 bg-opacity-80 text-white border border-border rounded-md my-4'
                        />
                        <p className='text-red-800'>{errorMsg}</p>
                    </div>

                    <div><button className='bg-red text-white p-3 w-80 mx-3 rounded-md' onClick={handleButtonClick}>Sign In</button></div>
                    <div><button className='py-4'>Forgot password</button></div>
                    <div className='text-left px-12 py-5'><input type='checkbox' className='w-5 h-5' /><span className='text-xl px-2'>Remember me</span></div>

                </form>
                <div className='text-left px-12'>
                    <span className=' text-border'>New to Netflix? </span><Link to={'/'} className='font-semibold' onClick={handleButtonClick}>Sign up now.</Link>
                </div>


            </div>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='main' />
        </div>
    )
}

export default SignIn