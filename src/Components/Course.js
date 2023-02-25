import React from 'react'
import { FaPhone } from 'react-icons/fa';
import first from '../image/first.jpg';
import second from '../image/second.jpg';
import logo1 from '../image/online.jpg';

const Course = () => {
  return (
    <div className='course'>
        <p className='heading'>Our Popular Courses</p>
      <div class="container">

        <div className='box'>
            <img src={second} alt="course"/>
            <p className='caption'>COMPUTER FUNDAMENTALS & MS-OFFICE</p>
            <p className='credit'>By Nitu Mam & Anuradha Singh from Delhi</p>
            <p><FaPhone/> +91 99580 90566</p>
        </div>
        <div className='box'>
            <img src={first} alt="course"/>
            <p className='caption'>HTML, CSS, WEBDEVELOPER & EPSILON</p>
            <p className='credit'>By Mr. Jitendra Pratap & Mr. Amrendra Mishra (Software Engineer)</p>
            <p><FaPhone/> +91 99580 90566</p>
        </div>
        <div className='box'>
            <img src={logo1} alt="course"/>
            <p className='caption'>CLASS VI-XTH ALL SUBJECTS ONLINE</p>
            <p className='credit'>By Archna Sinha  & Jyoti Mishra</p>
            <p><FaPhone/> +91 99580 90566</p>
        </div>
      </div>
    </div>
  )
}

export default Course