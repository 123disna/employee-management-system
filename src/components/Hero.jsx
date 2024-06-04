import React from 'react'
import {useTypewriter} from 'react-simple-typewriter';

const Hero = () => {
  const [text]=useTypewriter({
    words: [' Management System'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80
  });

  return (
    <div className='hero-main-div' id="home"  style={{ backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh'}}>
      <h1 className='text-center' style={{paddingTop:'50vh'}}>Employee 
        <span>{text}</span>
      </h1>
    </div>
  )
}

export default Hero
