import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loginorsignup from "../components/loginorsignup";
import { ShopContext } from "../components/ShopContextProvider";
import { useContext } from "react";
export default function Login(){
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
        if(!window.localStorage.getItem(stateemail)){
            alert("user does not exist with the following email id , please check your email id or try signing up instead") 
        }
        else if(window.localStorage.getItem(stateemail) && window.localStorage.getItem(stateemail)!==statename){
            alert("this name is not associated with the following email please check your name")
        }
        else if(window.localStorage.getItem(stateemail) && window.localStorage.getItem(stateemail)===statename){
            setUserislogged(true);
            navigate("/home");
        }
    }
    return(
        <Loginorsignup status="li" statename={statename} stateemail={stateemail} handlesubmit={handlesubmit} setStatename={setStatename} setStateemail={setStateemail}/>
    );
}