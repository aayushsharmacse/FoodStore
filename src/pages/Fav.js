import React from 'react'
import { useContext } from 'react';
import {ShopContext} from '../components/ShopContextProvider';
import loading from "../Loading/XOsX.gif";
import useFetch from '../components/useFetch';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Favsingleproduct from "../components/Favsingleproduct";
import emptyfavlist from "../images/money.png"
export default function Fav() {
  const {favourites}=useContext(ShopContext);
console.log("check out the error here",favourites)
  const [data]=useFetch("https://adorable-bat-fatigues.cyclic.app/best-foods");
     const [filtereddata,setFiltereddata]=useState({});
     
     useEffect(()=>{
       for(let x in favourites){
         const y=data.find((product)=>{return product.id===x})
         if(favourites[x]!==false && y )
         {
           setFiltereddata((prev)=>({...prev,[x]:y}));
         }
         }
         for(let x in filtereddata){
             if(favourites[x]===false)
             {
               setFiltereddata(delete filtereddata.id)
             }
         }
     })  
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
            <h1>My Favourite list : </h1> 
             {(Object.values(filtereddata).length===0 ? 
             (  
               <div className='loadingproductsingle'>
                   <img src={emptyfavlist} alt="emptyfavlist"/>
                   <h1>The list is empty , begin adding something ! !</h1>
               </div>
             ) 
             
             :
              (Object.values(filtereddata).map((product)=>{
           return (
             <Favsingleproduct product={product}/>
           );
         }) )
       )}
       
       </>
     );
}
