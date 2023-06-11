import { useState } from "react";
import Loginorsignup from "../components/loginorsignup";
import {useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../components/ShopContextProvider";
export default function Signup(){
    const {setUserislogged}=useContext(ShopContext);
    const navigate=useNavigate();
    const [statename,setStatename]=useState(""); 
    const [stateemail,setStateemail]=useState("");
    const handlesubmit=(e)=>{
        e.preventDefault();
        if(statename==="" || stateemail===""){
               alert("Please fill all the fields")
               return;
        }

        
        // window.localStorage.clear();

        // console.log(statename,stateemail);
        // window.localStorage.clear();
        // console.log(window.localStorage.getItem("name"))
        if(window.localStorage.getItem(stateemail)){
            alert("A user from this email already exists please sign up with other email or log in instead") 
        }
        else{
            window.localStorage.setItem(stateemail,statename)
            setUserislogged(true);
            navigate("/");
        }
        // window.localStorage.setItem("name",statename)
        // window.localStorage.setItem("email",stateemail)
        // window.localStorage.setItem(statename,stateemail)

        // {document.localStorage.setItem("data","{name:statename,email:stateemail}")};
    }
    return(
        <Loginorsignup status="su" statename={statename} stateemail={stateemail} handlesubmit={handlesubmit} setStatename={setStatename} setStateemail={setStateemail}/>        
    );
}