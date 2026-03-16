import React from 'react'
import HeroBg from '../../assets/images/HeroBg.jpg'
import './HeroSection.css'
const HeroSection = () => {
  return (
    <div className='hero-section'
     style={{
        backgroundImage : `url(${HeroBg})`,
        backgroundPosition : 'center',
        backgroundSize : 'cover',
        height : '80vh'

    }} >
        <h1>10 Tips to Learn Wed Development</h1>
        <p>Dicover essential tips to start your journey in web devlopment.</p>
        <button>
            <h3>Read More</h3>
        </button>
    </div>
  )
}

export default HeroSection