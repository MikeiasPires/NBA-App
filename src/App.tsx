import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './Global.css'
import NbaTimes from './Page/Times'

function App() {

  return (
    <>
    <Outlet/>
    </>
  )
}

export default App
