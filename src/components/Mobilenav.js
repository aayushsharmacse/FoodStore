import logo from '../images/logo.png';
import {Link} from "react-router-dom";
import cartlogo from "../images/001-carts.png";
import navmenu from "../images/menu.png" 
export default function Navbar(){
    return(
         <div className='mobilenav'>
            <img src={navmenu} alt="navmenu"/>
            <div>
            <input type='text'placeholder='   search products' className='searchbar'/>
            <Link to="/cart"><img src={cartlogo} alt="cartlogo"/></Link>
            </div>
         </div>
    );
    return(
        <div className='nav'>
        <div className='leftnav'>
          <h1>shOpee</h1>
          <img src={logo} alt="logo" className='logoimg'/>
        </div>
        <div className='middlenav'>
          <Link className="underremove" to="/"><p>Home</p></Link>
          <Link className="underremove" to="/trending"><p>Trending</p></Link>
          <Link className="underremove" to="/newarrivals"><p>New arrivals</p></Link>
        </div>
        <div className='rightnav'>
        <Link className="underremove" to="/login"><p>log in</p></Link>
          <Link className="underremove" to="/signup"><p>sign up</p></Link>
          <input type='text'placeholder='   search products' className='searchbar'/>
          <Link to="/cart"><img src={cartlogo} alt="cartlogo"/></Link>
        </div>
        </div>
    );
    
}