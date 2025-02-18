import './Footer.css'
import tiktok from '../assets/tiktok.png';

function Footer() {
    return (
      <>
      <div className='social'>
          <h4>Check out my page:</h4>
          <span>
            <a href='https://www.tiktok.com/@andrewnelson3591' target='_blank'>
              <img src={tiktok} alt='Tiktok Icon' />
              </a>      
          </span>
      </div>
      <section id='footer' className='footerContainer'>
          <p>&copy; 2025 Abnormal Load Services. <br />
          All Rights Reserved.
          </p>
      </section>
      </>
    )
  }
  
  export default Footer