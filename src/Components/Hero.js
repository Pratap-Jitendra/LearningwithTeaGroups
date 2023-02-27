import React from 'react'
import second from '../image/second.jpg';
import { Link } from 'react-router-dom';
const Hero = (props) => {
  return (
    <div className='hero'>
      <div className='heroimage'>
        <img src={second} alt="mainimage"/>
      </div>
      <div className='herocontents'>
      <h3 className='btn'><Link to="/reg">REGISTRATION</Link></h3>
      <h1>{props.heading}</h1>
      <h2>{props.location}</h2>
      </div>

    </div>
  )
}

export default Hero