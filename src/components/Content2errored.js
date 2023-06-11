import img1 from "../images/a-sandwich-3986330_640.jpg";
import img2 from "../images/abstract-1238247_640.jpg";
import img3 from "../images/south-indian-masala-dosa-green-260nw-2133851191.webp";
import img4 from "../images/appetite-1238631_640.jpg";
import img5 from "../images/sushi-546311_640.jpg";
import { useState , useEffect } from "react";
import { useRef } from "react";
export default function Content2errored(){
    const [data,setData]=useState([]);
    const data2=useRef("");
const [data3,setData3]=useState("");
  const url="https://www.themealdb.com/api/json/v1/1/list.php?a=list"
  const url2="https://www.themealdb.com/api/json/v1/1/filter.php?a="
  useEffect(()=>
  {
    fetch(url)
    .then((res)=>res.json())
    .then(data=>setData(data.meals))
  }
    ,[]);

    // const tryfunct=async(xyz)=>{
    //         const x=url2+xyz;
    //     console.log(x);
    //     fetch(x)
    //     .then((res)=>res.json())
    //     .then((data)=>data2.current=data.meals[0].strMealThumb)
    //     console.log(data2.current)
    // }
    useEffect(()=>{
        if(data3===""){
return;
        }
        fetch(url+data3)
        .then((res)=>res.json())
        .then((data)=>data2.current=data.meals[0].strMealThumb)
        console.log(data2.current)
    },[data3]);
    return(
        <>
        <div className="content2">
        <h1 className="simple">Shop the motheree food</h1>
        <h2>A Taste That Never Vanishes Away</h2>
        </div>
        <p>Choose your category</p>
        <div className="categorycontent">
            <div className="categorycontentimg">
                {data && data.map((items)=>{
                    if(!items.strArea || items.strArea==="" || items.strArea==="Unknown"){
                        return ;
                    }
                    // tryfunct(items.strArea)
                    // console.log(data2.current)
                    const xxx=()=>{setData3(items.strArea)}
                    xxx()
                    console.log(data2.current)
                    
                    return (
                    <div key={items.strArea} className="categorycontentimgin">
                    <img  src={data2.current} alt={items.strArea}/>
                    <p >{items.strArea}</p>
                </div>
                );
                })}
            </div>
        </div>
        </>
    );
}
