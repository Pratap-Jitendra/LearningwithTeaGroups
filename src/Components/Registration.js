import React, { useState } from 'react'
import { FaMailBulk, FaPhone, FaWhatsapp} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Registration = () => {
    const [data, setData] = useState(
        {
            name: "",
            mobile: "",
            edu: "",
            location: "",
            yesno: ""
        }
    )
const [click, setClick]=useState(false)

    const changeHandler = ((e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    })
    const handleSubmit = ((e) => {
        e.preventDefault();
       setData(data);
     
       
       console.log(data);
       
    })
    const show=()=>
    {
        setClick(!click)
    }
    return (
        <div className='reg'>
            <form onClick={handleSubmit}>
                <h1><FaPhone/> +91 99580 90566</h1>
                <input type="text" autoComplete='off' name="name" placeholder='Enter Your Name' value={data.name} onChange={changeHandler} />
                <input type="number" name="mobile" placeholder='Mobile Number' value={data.mobile} onChange={changeHandler} />
                <input type="text" name="edu" placeholder='Highest Qualification' value={data.edu} onChange={changeHandler} />
                <input type="text" name="location" placeholder='Location ' value={data.location} onChange={changeHandler} />
                <input type="text" name="yesno" placeholder='Interest for Course Yes|| NOT' value={data.yesno} onChange={changeHandler} />

                <button onClick={show}>SUBMIT</button>
            </form>
           <div className={click ? "form2":"form1"}>

            <h4>Hello! {data.name} Thanks! for interest with "{data.yesno}" Learning with Tea Groups</h4>
            <p>Please take <b>screen shot</b> and mail or <Link to="https://wa.me/09958090566" target="_blank"><FaWhatsapp/></Link></p>
            <h4><Link to="http://www.gmail.com" target="_blank"><FaMailBulk/></Link> Jitendra.pratap205@gmail.com <br/> </h4>
            
          
           </div>
        </div>

    )
}

export default Registration