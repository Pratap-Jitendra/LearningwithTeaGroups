import React, { useState } from 'react'
import {  FaPhone, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import download from '../image/download.png';

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
    const [click, setClick] = useState(false)

    const changeHandler = ((e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    })
    const handleSubmit = ((e) => {
        e.preventDefault();
        setData(data);


        console.log(data);

    })
    const show = () => {
        setClick(!click)
    }
    return (
        <div className='reg'>
            <form onClick={handleSubmit}>
                <h1><FaPhone /> +91 99580 90566</h1>
                <input type="text" autoComplete='off' name="name" placeholder='Enter Your Name' value={data.name} onChange={changeHandler} />
                <input type="number" name="mobile" placeholder='Mobile Number' value={data.mobile} onChange={changeHandler} />
                <input type="text" name="edu" placeholder='HTML || 6-10th Classes' value={data.edu} onChange={changeHandler} />
                <input type="text" name="location" placeholder='Location ' value={data.location} onChange={changeHandler} />
                <input type="text" name="yesno" placeholder='Yes || NOT' value={data.yesno} onChange={changeHandler} />

                <button onClick={show}>SUBMIT</button>
            </form>
            <div className={click ? "form2" : "form1"}>
                <img src={download} alt="popup" />
                <h3>Thanks! {data.name}!<br/><br/></h3>
                <h3>Welcome  from Learning with Tea Groups</h3>
                <h4>Please take <span className='red'>screen shot</span> and <Link to="https://wa.me/919958090566" target="_blank"><FaWhatsapp style={{color:'green', fontSize:'18px', borderColor:'green'}}/> </Link>.<br/><br/></h4>
                


            </div>
        </div>

    )
}

export default Registration