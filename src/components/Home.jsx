import React from 'react'
import './Home.css'
import van1 from '../assets/van1.jpeg';
import van2 from '../assets/van2.jpeg';
import header from '../assets/header.jpg'

function Home() {
  return (
    <>
    <div className='header'>
      <h1>ABNORMAL LOAD SERVICES</h1>
      <h2>ESCORT DRIVER</h2>
      <img src={header} alt='Header image wide load' />
    </div>

    <div className='background'>
      <div className='intro'>
          <img src={van2} alt='Van Image' />
          <div className='text'>
            <p>ALS in Swansea specialize in providing expert Escort Vehicle Services
              to assist companies with the safe and efficient transportation of wide loads.
              Operating throughout the entire UK, our drivers work closely with employers
              and their drivers to ensure every journey is smooth, compliant and secure.
            </p>
            <p>With a strong focus on safety, professionalism and precision, we navigate complex
              routes, manage traffic coordination, and mitigate risks, allowing companies to
              complete their deliveries on time and without hassle.
            </p>
            <p>Whether you're transporting oversized machinery, large infrastruture components,
              or any other wide load, you can trust our dedicated and experienced team
              to get the job done right.
            </p>

            <h2>Get in touch today to discuss how we can support your next wide-load transport!</h2>
          </div>
      </div>
    </div>
    </>
  )
}

export default Home