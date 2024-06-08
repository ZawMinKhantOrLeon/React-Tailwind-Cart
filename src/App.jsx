import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from './components/Products'
import Navbar from './components/Navbar'
import AddToCart from './components/AddToCart'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path='/add-to-cart' element={< AddToCart/>} />
      </Routes>
    </div>
  )
}

export default App
