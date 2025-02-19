import React from 'react'
import './Services.css'
import header from '../assets/header.jpg';
import img1 from '../assets/van1.jpeg';
import img2 from '../assets/van2.jpeg';
import img3 from '../assets/van3.jpeg';
import img4 from '../assets/van4.jpeg';
import img5 from '../assets/van5.JPG';
import img6 from '../assets/van6.JPG';
import img7 from '../assets/van7.JPG';
import img8 from '../assets/van8.JPG';
import img9 from '../assets/van9.JPG';
import img10 from '../assets/van10.JPG';
import img11 from '../assets/van11.JPG';
import img12 from '../assets/van12.JPG';
import img13 from '../assets/van13.JPG';
import img14 from '../assets/van14.JPG';
import img15 from '../assets/van15.JPG';
import img16 from '../assets/van16.JPG';
import img17 from '../assets/van17.JPG';
import img18 from '../assets/van18.JPG';
import img19 from '../assets/van19.JPG';
import img20 from '../assets/van20.jpg';
import img21 from '../assets/van21.jpg';
import img22 from '../assets/van22.jpg';
import img23 from '../assets/van23.jpg';
import img24 from '../assets/van24.jpg';
import img25 from '../assets/van25.jpg';
import img26 from '../assets/van26.jpg';
import img27 from '../assets/van27.jpg';
import img28 from '../assets/van28.jpg';
import img29 from '../assets/van29.jpg';


// Photo array that will be mapped through to display the images

const photos = [
    {
        id:1,
        src: img1,
    },
    {
        id:2,
        src: img2,
    },
    {
        id:3,
        src: img3,
    },
    {
        id:4,
        src: img4,
    },
    {
        id:5,
        src: img5,
    },
    {
        id:6,
        src: img6,
    },
    {
        id:7,
        src: img7,
    },
    {
        id:8,
        src: img8,
    },
    {
        id:9,
        src: img9,
    },
    {
        id:10,
        src: img10,
    },
    {
        id:11,
        src: img11,
    },
    {
        id:12,
        src: img12,
    },
    {
        id:13,
        src: img13,
    },
    {
        id:14,
        src: img14,
    },
    {
        id:15,
        src: img15,
    },
    {
        id:16,
        src: img16,
    },
    {
        id:17,
        src: img17,
    },
    {
        id:18,
        src: img18,
    },
    {
        id:19,
        src: img19,
    },
    {
        id:20,
        src: img20,
    },
    {
        id:21,
        src: img21,
    },
    {
        id:22,
        src: img22,
    },
    {
        id:23,
        src: img23,
    },
    {
        id:24,
        src: img24,
    },
    {
        id:25,
        src: img25,
    },
    {
        id:26,
        src: img26,
    },
    {
        id:27,
        src: img27,
    },
    {
        id:28,
        src: img28,
    },
    {
        id:29,
        src: img29,
    },

];

const Services = () => {

    return (
        <>
        <div className='header'>
            <h1>Gallery</h1>
            <img src={header} alt='Header image wide load' />
        </div>
        
        <div className='background'>
        <div className='gallery'>
            <div className='imgContainer'>
                {photos.map((photo) => {
                    return (
                        <div className='imgSelect'>
                            <img className='img' src={photo.src} key={photo.id} />
                        </div>
                    )
                })}
            </div>
        </div>
        </div>
        </> 
    )
}

export default Services