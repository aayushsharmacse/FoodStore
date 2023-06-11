import img1 from "../images/a-sandwich-3986330_640.jpg";
import img2 from "../images/abstract-1238247_640.jpg";
import img3 from "../images/appetite-1238631_640.jpg";
import img4 from "../images/food-1553300_640.jpg";
import img5 from "../images/food-2456084_640.jpg";
import {useState} from "react";
import {useEffect} from "react";

export default function Fleft(props)
{
    const a=[img1,img2,img3,img4,img5]
    const [index,setIndex]=useState(0);
    useEffect(()=>{
        setTimeout(() => {
            setIndex((x)=>x=(x+1)%5)
            },3000);
            // console.log("hello");
    }  
        ,[index]);
    return (
        <div className="fleftdiv">

            {/*causing rerender again and again {setInterval(() => {
                setIndex((prev)=>(prev+1)%5)
            }, 1000)} */}
            
            <img src={a[index]} alt="img1"/>
        </div>
    );
}
// import img1 from "C:\\Users\\Admin\\OneDrive\\Desktop\\github first projects\\first react app\\my-react-app\\src\\images\\one.png";
// import img2 from "C:\\Users\\Admin\\OneDrive\\Desktop\\github first projects\\first react app\\my-react-app\\src\\images\\pizza-2766471_640.jpg";
// import img3 from "C:\\Users\\Admin\\OneDrive\\Desktop\\github first projects\\first react app\\my-react-app\\src\\images\\south-indian-masala-dosa-green-260nw-2133851191.webp";
// import img4 from "C:\\Users\\Admin\\OneDrive\\Desktop\\github first projects\\first react app\\my-react-app\\src\\images\\potato-3497424_640.jpg";
// import img5 from "C:\\Users\\Admin\\OneDrive\\Desktop\\github first projects\\first react app\\my-react-app\\src\\images\\sushi-546311_640.jpg";
// import { useState, useEffect } from "react";

// export default function Fleft(props) {
//   const a = [img1, img2, img3, img4, img5];
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % 5);
//     }, 1000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   return (
//     <div className="fleftdiv">
//       <img src={a[index]} alt="img1" />
//     </div>
//   );
// }
