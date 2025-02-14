import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar';
import { BrowserRouter as Router, Route, Routes }from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {

  return (
    <>
    <div className='navbar'>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
    </div>
    <Footer />
    
    </>
  )
}

export default App
