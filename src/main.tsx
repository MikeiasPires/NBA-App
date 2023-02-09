import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './Global.css'

import {createBrowserRouter, RouterProvider} from "react-router-dom"

import NbaTimes from './Page/Times'
import Favorite from './PageFavorite'
import ErrorPage from '../src/Error/ErrorPage'

const router = createBrowserRouter([
  {
    path:"/",
    errorElement:<ErrorPage/>,
    element: <App/>,
      children:[
      {
        path:"/",
        element: <NbaTimes/>
      },
      {
        path:"/Favorite",
        element: <Favorite/>
      }, 
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
)
