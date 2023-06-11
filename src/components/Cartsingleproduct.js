import React from 'react'
import dustbin from "../images/delete.png";
import { ShopContext } from '../components/ShopContextProvider';
import { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Cartsingleproduct(props) {
    const {product}=props;
    const [inputvalue,setInputvalue]=useState("");
    const {cartItems,addtocart,removefromcart,addtocartbyvalue,removefromcartbyvalue,emptyitemfromcart,emptywholecart}=useContext(ShopContext);
    const navigate=useNavigate();
  return (
    <div className='formiddledisply'>
            <div className='productsincartcontainer' key={product.id}>
            <img id="dustbinimg" src={dustbin} alt={dustbin} onClick={()=>{emptyitemfromcart(product.id)}}/>

            <div id='productsincartimg' onClick={()=>navigate(`/products/${product.id}`)}>
                <img src={product.img} alt={product.id}/>
            </div>
            <div className='productincartinfo'>
            <div onClick={()=>navigate(`/products/${product.id}`)}>
                <h1>{product.name}</h1>
                <h3>${product.price}</h3>
            </div>
            <div>
                {/* <button>-</button>
                <input type="text" value={inputvalue} onChange={(e)=>{setInputvalue(e.target.value)}}/>
                <button>+</button> */}
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
  )
}
