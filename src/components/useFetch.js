import { useState, useEffect } from 'react';
export default function useFetch(url) {
  // console.log(url)
    const [data,setData]=useState([]);
    useEffect(()=>{
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>setData(data))
    },[]);
    // console.log(data)
  return [data];
}

