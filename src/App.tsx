import { useContext, useState } from 'react'
import { Outlet } from 'react-router-dom'
import  { MyProvider } from './Context/MyContext'
import './Global.css'
import NbaTimes from './Page/Times'

function App() {


  return (
    <>
    <MyProvider>
    <Outlet/>
    </MyProvider>
    </>
  )
}

export default App
