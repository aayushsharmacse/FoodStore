import React, { useState } from 'react'
import useFetch from './useFetch';
import { useParams } from 'react-router-dom'
import loading from "../Loading/XOsX.gif"
import { ShopContext } from "./ShopContextProvider";
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
export default function Singleproduct() {

  const [itemvalue,setItemvalue]=useState("");
  
  const {cartItems,addtocart,removefromcart,addtocartbyvalue,removefromcartbyvalue,addtofav,favourites,removefromfav}=useContext(ShopContext);


  const {productid}=useParams();
 
  const navigate=useNavigate();
  const [data]=useFetch("https://668917b40ea28ca88b86ed9f.mockapi.io/best-foods/Foods");
    const product=data && data.find((product)=>product.id===productid);

    if(!product){
      return (
        <div className='loadingproductsingle'>
          <img src={loading} alt="loading"/>
          <h1>Loading...</h1>
        </div>
      );
    }
    const {id,img,name,dsc,price,rate,country}=product;
    return(
        <>
        <button className='gobackbutton' onClick={()=>{navigate(-1)}}>Go back</button>
        <div className='productsingle'>
          <div className='forproductsingleimg'>
        <img onError={(e)=>e.currentTarget.parentNode.style.display="none"} src={img} alt={id} className='productsingleimg'/>
          </div>
          <div className='forinfoproductsingle'>
          <h1 className='productsinglename'>{name}</h1>

        <h3 className='productsingleprice'>${price}</h3>
<br/>
            <h4>Product ID</h4>
          <p className='productsingleid'>{id}</p>
          <br/>
          <hr/>
          <br/>
        <p className='productsinglecountry'>Country : {country}</p>
<br/>
        <p className='productsinglenamedsc'>Description : {dsc}</p>
        <br/>
        <p className='productsinglerate'>User Ratings : {rate}</p>
        <br/>

        <div className='productsinglecart'>
          <p>In cart : {cartItems[id]}</p>
          <button onClick={()=>{addtocart(id)}}>Add(+1)</button>
          <button onClick={()=>{removefromcart(id)}}>Remove(-1)</button>
          <input pattern='[0-9]*' placeholder='Enter manually' value={itemvalue} onChange={(e)=>setItemvalue((v)=>e.target.validity.valid?e.target.value:v)} className='inputforcarts'/>
          {itemvalue && (<><button onClick={()=>{addtocartbyvalue(id,itemvalue)}}>Add(+{itemvalue})</button><button onClick={()=>{removefromcartbyvalue(id,itemvalue)}}>Remove(-{itemvalue})</button></>)}
        </div>
         {favourites[id]===false ? 
         (<button className='addtofavbutton' onClick={()=>{addtofav(id)}}>Add to favourites</button>)
        :
        (<button className='removefromfavbutton' onClick={()=>{removefromfav(id)}}>Remove from favourites</button>)
        }
          </div>
        </div>
        </>
        
    );
}
