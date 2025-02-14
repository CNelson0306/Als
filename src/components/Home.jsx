import React from 'react'
import './Home.css'
import van1 from '../assets/van1.jpeg';

function Home() {
  return (
    <div className='background'>
      <div className='intro'>
          <img src={van1} alt='Van Image' />
          <div className='text'>
            <p>ALS specialises in the transportation</p>
            <p>of abnormal loads across the UK.</p>
            <p>Our drivers work closely with each</p>
            <p>customer ensuring safe delivery</p>
            <p>of each project.</p>
          </div>
      </div>
    </div>
  
  )
}

export default Home