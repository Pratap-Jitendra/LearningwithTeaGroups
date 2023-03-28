import React, { useState } from 'react'
import logo from '../image/logo.jpeg';
import data from './Details.json'


const IDS = () => {
const [inputs, setInput]=useState("");

console.log(inputs);
let res=data.filter(e=>e.Code===inputs)
console.log(res);
  
  
  return (
    <div className='students'>
      <div className='upper'>
        <h1>Student Details:</h1>
        <h3>Learning with Tea Groups online Records</h3>
        <input type="text" name='search' id="search" placeholder='Search here... L001' onChange={(e)=>setInput(e.target.value)} />
      </div>
      <div className='below'>
        {data.filter((e)=>e.Code.includes(inputs)).map((e) => {
          return <div className='record' key={e.Code}>
            <img src={e.img} alt="record" />
            <h4>Name: {e.Name}</h4>
            <h3>ID: {e.Code}</h3>
            <img src={logo} alt="result" className='logoimg'/>
            <h4>DOJ: {e.DOJ}</h4>
            <h6>Computer Fundamentals, Photoshop, HTML, CSS, OCR && Epsilion</h6>
            <h1>  {e.Remark}</h1>
            <p><b>job-Oriented Online Course from Learing with Tea Groups</b></p>

          </div>
        })}


      </div>
    </div>
  )}


export default IDS