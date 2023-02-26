import React from 'react'
import jitu from '../image/jitu.jpeg'
const Founder = () => {
  return (
    <div className="founder">
      <div className='leftside'>
        <h4>Why you Choose US:</h4>
        <p>As per market research mostly companies hires only knowledge not degree. If you have basic degree [10+2+3] are just enough for join in IT Sectors for jobs. </p>

        <p>Companies never say join with Degree “Come and join with [10+2+3] with technical Knowledge.<br />If you have degree and jobless please update him/her self free online classes by our experts.</p>
        <p>We are providing online projects like ToDo List, website, Book-Coding </p>
        <p className='right'>This course is free for all.<br />Thanks.</p>
      </div>
      <div className='rightsidef'>
        <img src={jitu} alt="faculty1" />
      </div>
    </div>
    
  )
}

export default Founder