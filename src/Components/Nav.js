import React, { useState } from 'react';
import learing from '../image/learning.png';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';
import '../App.css';

const Nav = () => {
  const [click, setClick]=useState(false)
 const toggel=()=>
 {
  setClick(!click)
 }
 
  return (
    <div className={click ? 'navbar': "navbar active"}>
      <div className='logo'>
        <img src={learing} alt="firstimage" className='res'/>
        
      </div>
      <div className="navlist">
      
        <ul >
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/course">COURSE</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/students">STUDENTS</Link></li>
          <li><Link to="/reg">SIGN UP</Link></li>
          <li><Link to="https://wa.me/919958090566" target="_blank"><FaWhatsapp/></Link></li>
         
         
        </ul>
      </div>
     
     <div className="hamburger" onClick={toggel}>
      {click ? (<FaTimes style={{color:"white"}}/>):(<FaBars style={{color:"white"}}/>)
      }
      </div>
  
    </div>


  )
}

export default Nav