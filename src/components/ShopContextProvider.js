import React  from 'react'
import { useState } from 'react'
import { createContext} from 'react'
import useFetch from './useFetch';
import { useEffect } from 'react';
export const ShopContext=createContext(null);


export default function ShopContextProvider(props) {
    const [allproducts]=useFetch("https://adorable-bat-fatigues.cyclic.app/best-foods")
    // console.log(allproducts.length);
    const [cartItems,setCartItems]=useState({});
    // const [value,setValue]=useState(Number(0));
    const [userislogged,setUserislogged]=useState(false);
    
    const [favourites,setFavourites]=useState({});
    
    useEffect(() => {
        const getDefaultCart=()=>{
            let cart={};
            for(let i=0;i<allproducts.length;i++){
                cart[allproducts[i].id]=Number(0);
            }
            return cart;
        }
      setCartItems(getDefaultCart());
    },[allproducts]);

    useEffect(() => {
        const getFavItems=()=>{
            let favs={};
            for(let i=0;i<allproducts.length;i++){
                favs[allproducts[i].id]=false;
            }
            return favs;
        }
      setFavourites(getFavItems());
    },[allproducts]);


    const addtocart=(itemid)=>{
        setCartItems((prev)=>({...prev,[itemid]:prev[itemid]+1}))
    }
    const removefromcart=(itemid)=>{
        setCartItems((prev)=>({...prev,[itemid]:prev[itemid]===0? 0 : prev[itemid]-1}))
    }
    const addtocartbyvalue=(itemid,value)=>{
        // alert("value is ",value)
        setCartItems((prev)=>({...prev,[itemid]:prev[itemid]+Number(value)}))
    }
    const removefromcartbyvalue=(itemid,value)=>{
        // alert("value is ",value)
        setCartItems((prev)=>({...prev,[itemid]:prev[itemid]>=Number(value)?(prev[itemid]-Number(value)) : Number(0)}))
    }
    const emptyitemfromcart=(itemid)=>{
        setCartItems((prev)=>({...prev,[itemid]:Number(0)}));
    }
    const emptywholecart=()=>{
        for(let x in cartItems){
            emptyitemfromcart(x);
          }
    };

    const addtofav=(itemid)=>{
           setFavourites((prev)=>({...prev,[itemid]:true}));
    }
    const removefromfav=(itemid)=>{
        setFavourites((prev)=>({...prev,[itemid]:false}));
    }

    const contextValue={cartItems,addtocart,removefromcart,addtocartbyvalue,removefromcartbyvalue,emptyitemfromcart,emptywholecart,userislogged,setUserislogged,favourites,addtofav,removefromfav};



    return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}

