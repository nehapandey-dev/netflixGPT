import React from 'react'
import Login from './Login'
import BrowsePage from './BrowesPage'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SignIn from './SignIn'
import SignUp from './signUp'



function Body() {
    const appRouter = createBrowserRouter([
        {
            path: '/',
            element:<Login/>
        },
        {
            path: '/signup',
            element:<SignUp/>
        },
        {
            path: '/signin',
            element:<SignIn/>
        },
        {
            path:'/browsepage',
            element: <BrowsePage/>
        },
    ])

  return (
    <div>
        <RouterProvider router={appRouter}>
        <Login/>
        <BrowsePage/>
        </RouterProvider>
        
    </div>
  )
}

export default Body