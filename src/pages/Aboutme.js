import React from 'react'
import Navbar from '../components/Navbar'
import developerimg from "../images/3189844_446776-PF90CP-29.jpg"
import Footer from '../components/Footer'
import { useState } from 'react'
import { useRef } from 'react'
export default function Aboutme() {
    const targetelement=useRef();
    const [buttonclicking,setButtonclicking]=useState(false);
    const handleButtonclick=(e)=>{
        setButtonclicking(true);
        console.log(targetelement.current.classList.toggle("contactmeinfoadded"))
    }
  return (
    <div className='aboutmecontainer'>
    <Navbar/>
    <h1 className='justifycenter addedeffects'>Knowing the dev</h1>
    <div className='margin2rem'>
        <div className='meinfo'>
        <img className="aboutmeimg" src={developerimg} alt="developerimg"/>
        <span><b>About me!?</b></span>
        <span>&#9996;</span>
        </div>
        <div>
        <p>Hello, my name is <strong>Aayush Sharma</strong>, and I am currently a 2nd-year undergraduate student at Jecrc University located in Jaipur, Rajasthan. I have always been fascinated by the vast world of technology and its potential to shape the future. My academic journey has been focused on exploring various aspects of this field, including AI, ML, DS, DA, DL, finance, web development, trading, and many more.</p>
        <br/><br/>
        <p>As a budding technologist, I am particularly excited about the intersection of artificial intelligence and machine learning. I see immense potential in leveraging these technologies to solve real-world problems and make a positive impact on society. I aspire to contribute to the development of AI-driven solutions that address significant challenges in fields like healthcare, sustainability, and education.</p>
        <br/><br/>
        <p>Moreover, my interest in data analysis and data science has led me to explore the power of data-driven decision making. I enjoy working with large datasets, extracting meaningful insights, and leveraging data visualization tools to communicate findings effectively.</p>
        <br/><br/>
        <p>Additionally, I have a keen interest in web development, as it allows me to combine my creativity with technical skills. I enjoy building interactive and user-friendly websites that deliver seamless experiences to users.</p>
        </div>
    </div>
    <button className='aboutmebtn' onClick={handleButtonclick}>Reach me</button>
    <div className='margin2rem contactmeinfo' ref={targetelement}>
        <p id="emaildev">Email me - aayush.21bcon625@jecrcu.edu.in</p>
    </div>
    <Footer/>
    </div>
  )
}

