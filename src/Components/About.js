import React from 'react'
import sneha from '../image/sneha.jpeg'
import logo2 from '../image/project.jpg';

const About = () => {
    return (
        <div className='about'>

            <div className="container">

                <div className='leftside'>
                    <h3>Computer Fundamentals</h3>
                    <h4>VI to Xth Online Classes</h4>
                    <p>Augmenting your skills can get you instantly hired. We help you attain mastery in your domain through our deep learning teaching methodology</p>
                    <p>We Offered: Ms-office, HTML, CSS, PHOTOSHOP and Epsilion.</p>
                    <p>VI to X classes online like HOME Tutaion</p>
                </div>
                <div className='rightside'>
                    <img src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" alt="faculty1" />
                </div>
            </div>



            <div className="container layoutchange">
                <div className='leftside'>

                    <h3>Our Students say:</h3>
                    <h4>Sneha Singh from Delhi, Mayur Vihar Extension</h4>
                    <h4>Laxmi Kumari from Ara (Bihar)</h4>
                    <p>Golden opportunity! It’s true I had no technical degree but Motivational faculties <b>[LEARNING WITH TEA GROUPS]</b> gives such a chance. It’s true on beginning too much hesitation and full of fear how is possible to join as a software engineer without having degree. Now, full fill my dream.
                        Thanks to providing HTML & CSS classes of by <b><u>Mr. Jitendra Pratap</u></b> sir is awesome.</p>
                    <p className='right'>Thanks<br />[HTML Programmer]</p>

                </div>
                <div className='rightside'>
                    <img src={sneha} alt="faculty1" />
                </div>
            </div>


            <div className="container">

                <div className='leftside'>
                    <h3>Projects</h3>
                    <h4>By Jitendra Pratap & Mr. Amrendra Kumar Mishra</h4>
                    <p>We offer during course many Live projects such as Portfolio, WebDeveloper (website), Online Exam, Oral Test, About Your self, Typing Test and Quiz.</p>
                    <p>Introudution to all students with Companies's HR before interview.</p>

                </div>
                <div className='rightside'>
                    <img src={logo2} alt="faculty1" />
                </div>
            </div>

        </div>
    )
}

export default About