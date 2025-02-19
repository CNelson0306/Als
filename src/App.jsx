import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar';
import { BrowserRouter as Router, Route, Routes }from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {

  return (
    <>
    <div className='navbar'>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
    </div>
    <Footer />
    
    </>
  )
}

export default App
