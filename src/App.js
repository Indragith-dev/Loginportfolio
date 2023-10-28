import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import Navbar from './components/NavBar/navbar'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/Signup' element={<Signup />}></Route>
        <Route path='/navbar' element={<Navbar />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
