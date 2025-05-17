import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
<<<<<<< HEAD
import Login from '../../pages/login.jsx'
=======
import Login from '../../pages/Login'
>>>>>>> f7df252bf73b4b0a9e8f84154b0fdd2b21b13a32
import Signup from '../../pages/Signup'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
