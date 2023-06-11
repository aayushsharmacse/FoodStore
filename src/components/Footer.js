import React from 'react'
import twitter from "../images/twitter.png"
import watsapp from "../images/whatsapp.png"
import linkedin from "../images/linkedin.png"
import facebook from "../images/facebook.png"
import { Link, NavLink } from 'react-router-dom'
export default function Footer() {
  return (
    <div className='foot'>
        <div className='dlocs'>
            <h4>Locations where we deliver</h4>
            <ul>
            <li>United States</li>
            <li>China</li>
            <li>Japan</li>
            <li>Germany</li>
            <li>The United Kingdom</li>
            <li>India</li>
            <li>France</li>
            <li>Italy</li>
            <li>Canada</li>
            <li>South Korea</li>
            <li>Russia</li>
            <li>Brazil</li>
            <li>Australia</li>
            <li>Spain</li>
            <li>Mexico</li>
            <li>Indonesia</li>
            <li>Netherlands</li>
            <li>Saudi Arabia</li>
            <li>Turkey</li>
            <li>Switzerland</li>
            <li>Poland</li>
            <li>Sweden</li>
            <li>Belgium</li>
            <li>Thailand</li>
            <li>Ireland</li>
        </ul>
        </div>
        <div className='endingfooter'>
            <div className='websitefootinfo'>
            <div className='aboutus'>
            <h3>About Us</h3>
            <ul>
                <li><Link className="underremove" to="/about">Who are we</Link></li>
                <li>Blog</li>
                <li>Work for us</li>
                <li>Report issues</li>
                <li>Contact us</li>
            </ul>
            </div>
            <div className='socials'>
                <h3>Socialize with us</h3>
                <ul>
                    <li>
                        <img src={twitter} alt="twitter"/>
                    </li>
                    <li>
                        <img src={watsapp} alt="twitter"/>
                    </li>
                    <li>
                        <img src={linkedin} alt="twitter"/>
                    </li>
                    <li>
                        <img src={facebook} alt="twitter"/>
                    </li>
                </ul>
            </div>
            </div>
            <div className='aboutme'>
            <h1>About me <span>&#x1F601;</span></h1>
            <ul>
                <li>
                    <h2><Link to="/aboutme">WHO AM I!?</Link></h2>
                </li>
                <li>
                    Reach me
                </li>
                <li>
                    Give suggestions
                </li>
            </ul>
            </div>

        </div>
    </div>
  );
}
