import React from 'react'
import header from '../assets/header.jpg';
import './Contact.css';


function Contact () {
  return (
    <>
    <div className='header'>
        <img src={header} alt='Header image wide load' />
        <h1>Contact</h1>
    </div>
    <div className='background'>
        <section id='contact' className='container'>
            <h2>For more information please get in touch:</h2>
            <form action='' method='post'>
                <div className='formGroup'>
                    <label htmlFor='name' hidden>
                        Name:
                    </label>
                    <input 
                    type='text' 
                    name='name' 
                    id='name' 
                    placeholder='Name' 
                    required 
                    />
                </div>

                <div className='formGroup'>
                    <label htmlFor='email' hidden>
                        Email:
                    </label>
                    <input 
                    type='email' 
                    name='email' 
                    id='email' 
                    placeholder='Email' 
                    required 
                    />
                </div>

                <div className='formGroup'>
                    <label htmlFor='message' hidden>
                        Message...
                    </label>
                    <textarea 
                    name='message' 
                    id='message' 
                    placeholder='Message' 
                    required>
                    </textarea> 
                </div>

                {/* For the form functionality i used Emailjs */}
                <input className='hover btn' type='submit' value='Submit' />
            </form>
        </section>
    </div>
    </>
  )
}

export default Contact;