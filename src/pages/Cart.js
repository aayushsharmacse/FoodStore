import React, { useEffect, useState } from 'react'
import useFetch from '../components/useFetch'
import { ShopContext } from '../components/ShopContextProvider';
import { useContext } from 'react';
import loading from "../Loading/XOsX.gif";
import emptycart from "../images/shopping-cart.png"
import { Link } from 'react-router-dom';
// import dustbin from "../images/garbage.png";
// import dustbin from "../images/delete.png";
import Cartsingleproduct from '../components/Cartsingleproduct';

export default function Cart() {
  const [data]=useFetch("https://668917b40ea28ca88b86ed9f.mockapi.io/best-foods/Foods");
  // console.log(data)
  const [filtereddata,setFiltereddata]=useState({});
  // const [inputvalue,setInputvalue]=useState("");
  const [total,setTotal]=useState(0);
  // const {cartItems,addtocart,removefromcart,addtocartbyvalue,removefromcartbyvalue,emptyitemfromcart,emptywholecart}=useContext(ShopContext);
  const {cartItems,emptywholecart}=useContext(ShopContext);
  
  useEffect(()=>{
    for(let x in cartItems){
      const y=data.find((product)=>{return product.id===x})
      if(cartItems[x]!==0 && y )
      {
        // console.log(x)
        setFiltereddata((prev)=>({...prev,[x]:y}));
      }
      }
      for(let x in filtereddata){
          if(cartItems[x]===0)
          {
            setFiltereddata(delete filtereddata.id)
          }
      }
  })
  // useEffect(()=>{
  // console.log(filtereddata);
  // }
  // ,[filtereddata]
  // );

useEffect(()=>{
  const x=()=>{
    let y=0;
    Object.values(filtereddata).map((p)=>{
      y+=p.price*cartItems[p.id]
     })
     return y;
  };
 setTotal(x());
},[filtereddata,setFiltereddata]);
  
const handlecartcheckout=()=>{
  alert("Thank you for shopping with us")
  // for(let x in cartItems){
  //   cartItems[x]=0;
  // }
  emptywholecart();
};

const mystyle={
  backgroundColor: "red",
  padding: "1rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  alignContents: "center",
  borderRadius: "20%"
}
  if(!filtereddata || !data){
    return (
      <div className='loadingproductsingle'>
        <img src={loading} alt="loading"/>
        <h1>Loading...</h1>
      </div>
    );
  }
  
    return (
      <>
        <Link to="/"><button className='gobackbutton'>Go back</button></Link>
        {total!==0 && <button style={mystyle} onClick={()=>{emptywholecart()}}>Empty the cart??</button>}
          {(Object.values(filtereddata).length===0 ? 
          (  
            <div className='loadingproductsingle'>
                <img src={emptycart} alt="emptycart"/>
                <h1>The cart is empty just like your stomach begin your shoping !</h1>
            </div>
          ) 
          
          :
           (Object.values(filtereddata).map((product)=>{
        return (
          <Cartsingleproduct product={product}/>
        //     <div className='formiddledisply'>
        //     <div className='productsincartcontainer' key={product.id}>
        //     <img id="dustbinimg" src={dustbin} alt={dustbin} onClick={()=>{emptyitemfromcart(product.id)}}/>

        //     <div id='productsincartimg'>
        //         <img src={product.img} alt={product.id}/>
        //     </div>
        //     <div className='productincartinfo'>
        //     <div>
        //         <h1>{product.name}</h1>
        //         <h3>${product.price}</h3>
        //     </div>
        //     <div>
        //         {/* <button>-</button>
        //         <input type="text" value={inputvalue} onChange={(e)=>{setInputvalue(e.target.value)}}/>
        //         <button>+</button> */}
        //         <div className='productsinglecart'>
        //   <p>In cart : {cartItems[product.id]}</p>
        //   <button onClick={()=>{addtocart(product.id)}}>Add(+1)</button>
        //   <button onClick={()=>{removefromcart(product.id)}}>Remove(-1)</button>
        //   <input placeholder='Enter manually' value={inputvalue} onChange={(e)=>setInputvalue(e.target.value)} className='inputforcarts'/>
        //   {inputvalue && (<><button onClick={()=>{addtocartbyvalue(product.id,inputvalue)}}>Add(+{inputvalue})</button><button onClick={()=>{removefromcartbyvalue(product.id,inputvalue)}}>Remove(-{inputvalue})</button></>)}
        // </div>
        //     </div>
        //     </div>
        //   </div>
        //   </div>
        );
      }) )
    )}
    {total!==0 && 
    <>
    <div className='billingtableparent'>
    <table className='billingtable'>
      <h1><caption>Billing information</caption></h1>
            <tr>
              <th>Product ID</th>
              <th>Price($)</th>
              <th>Quantity</th>
            </tr>
      { Object.keys(filtereddata).map((pid)=>{
        return (
        <tr>
          <td>
            {pid}
          </td>
          <td>
            ${filtereddata[pid].price}
          </td>
          <td>
            {cartItems[pid]}
          </td>
        </tr>  
        );
      })}
      </table>
      </div>
      <br/>
      <div className='billingtableparent'>
      <strong><h2>Total : ${total}</h2></strong>
      <br/>
      <button onClick={handlecartcheckout} style={mystyle}>Checkout</button>
      </div>
      
</>
    }
    </>
  );
}
