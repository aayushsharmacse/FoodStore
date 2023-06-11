import React from "react";
import cartlogo from "../images/001-carts.png"
import logo from '../images/logo.png';
import {Link} from "react-router-dom";
import { ShopContext } from "./ShopContextProvider";
import { useContext } from "react";
export default function Navbar(){
  const {userislogged}=useContext(ShopContext);
    return(
        <header className="App-header">
        <div className='nav'>
        <div className='leftnav'>
          <h1>shOpee</h1>
          <img src={logo} alt="logo" className='logoimg'/>
        </div>
        <div className='middlenav'>
        <Link className="underremove" to="/aboutme"><p>AboutDev</p></Link>
          <Link className="underremove" to="/"><p>Home</p></Link>
          {/* <Link className="underremove" to="/trending"><p>Trending</p></Link> */}
          <Link className="underremove" to="/favourites"><p>favourites</p></Link>
          <Link className="underremove" to="/products"><p>Products</p></Link>

        </div>
        <div className='rightnav'>
        {!userislogged && <Link className="underremove" to="/login"><p>log in</p></Link>}
        {!userislogged && <Link className="underremove" to="/signup"><p>sign up</p></Link>}
        {userislogged && <Link className="underremove" to="/about"><p>AboutUs</p></Link>}
          <input type='text'placeholder='   search products' className='searchbar'/>
          <Link to="/cart"><img src={cartlogo} alt="cartlogo"/></Link>
        </div>
        </div>
      </header>
    );
    
}