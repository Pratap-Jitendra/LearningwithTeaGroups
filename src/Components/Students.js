import React from 'react'
import data from './Details.json'


const Students = ((e) => {

    const popup=()=>
    {
        alert("Progress Report will publish after some days...")
    }
  return (
    <div className='students'>
        <h1>Students Details:</h1>
        <table>
  
        <thead>
            <tr>
                <th>Code</th>
                <th>Name:</th>
                                <th>Pilot</th>
                <th>Q1</th>
                <th>Q2</th>
                <th>Q3</th>
               
                <th>Description</th>
            </tr>
            </thead>
<tbody>
     {
data.map((e)=>
{
return  <tr key={e.Code}>
    <td>{e.Code}</td>
    <td>{e.Name}</td>
        <td>{e.CV}</td>
    <td>{e.Quiz1}</td>
    <td>{e.Quiz2}</td>
    <td>{e.Quiz3}</td>
    
    <td><button onClick={popup}>Details</button></td>
</tr>
})
 
     
     }
</tbody>
        </table>
        
    </div>
  )
}
)
export default Students