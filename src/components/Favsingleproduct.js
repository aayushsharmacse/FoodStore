import React from 'react'
import dislike from "../images/dislike.png";
import { ShopContext } from '../components/ShopContextProvider';
import { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Cartsingleproduct(props) {
    const {product}=props;
    const [inputvalue,setInputvalue]=useState("");
    const {cartItems,addtocart,removefromcart,addtocartbyvalue,removefromcartbyvalue,removefromfav}=useContext(ShopContext);
 const navigate=useNavigate();
  return (
    <div className='formiddledisply'>
            <div className='productsincartcontainer' key={product.id}>
            <img id="dislikeimg" src={dislike} alt={dislike} onClick={()=>{removefromfav(product.id)}}/>

            <div id='productsincartimg'>
                <img src={product.img} alt={product.id} onClick={()=>navigate(`/products/${product.id}`)}/>
            </div>
            <div className='productincartinfo'>
            <div onClick={()=>navigate(`/products/${product.id}`)}>
                <h1 >{product.name}</h1>
                <h3>${product.price}</h3>
            </div>
            <div>
                <div className='productsinglecart'>
          <p>In cart : {cartItems[product.id]}</p>
          <button onClick={()=>{addtocart(product.id)}}>Add(+1)</button>
          <button onClick={()=>{removefromcart(product.id)}}>Remove(-1)</button>
          <input pattern='[0-9]*' placeholder='Enter manually' value={inputvalue} onChange={(e)=>setInputvalue((v)=>e.target.validity.valid?e.target.value:v)} className='inputforcarts'/>
          {inputvalue && (<><button onClick={()=>{addtocartbyvalue(product.id,inputvalue)}}>Add(+{inputvalue})</button><button onClick={()=>{removefromcartbyvalue(product.id,inputvalue)}}>Remove(-{inputvalue})</button></>)}
        </div>
            </div>
            </div>
          </div>
          </div>
  );
}

