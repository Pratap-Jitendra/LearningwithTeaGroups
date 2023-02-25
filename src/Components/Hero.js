import React from 'react'
import second from '../image/second.jpg';
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <div className='hero'>
      <div className='heroimage'>
        <img src={second} alt="mainimage"/>
      </div>
      <div className='herocontents'>
      <button className='btn'><Link to="/reg">REGISTRATION</Link></button>
      <h1>Learning with Tea Groups</h1>
      <h2>New Delhi</h2>
      </div>

    </div>
  )
}

export default Hero