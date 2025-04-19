import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        
        </Routes> 
        <Footer />    
    </div>
  )
}

export default App
