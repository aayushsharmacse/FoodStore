import React from 'react'
import Footer from '../components/Footer'
import chefimg from "../images/chef-ge43ca0a8d_1280.png"
import Navbar from '../components/Navbar'
export default function About() {
  return (
    <>
       <Navbar/>
      <div className='aboutuscontent'>
      <h1>About us</h1>
      <h2>We are the revolutionary fire</h2>
      <p>Our family started in a small kitch where we some 
        friends were taking how we missed our mothers food 
        staying away from home. We were trying to figure 
        out how was it so differnt from the food we ordered 
        from other outside . But it was not visible to us 
        till we confirmed it outseleves , it was so simple 
        it didn't had the mothers magic ! </p>
        <p>And soon began our reseach for our mother's and 
          nani's and dadi't recipies. So whatever you see today
          it the result of that. </p>
         <img className="chefimg"  src={chefimg} alt="chefimg"/> 
    </div>
         <Footer/> 
    </> 

  )
}
