import React from 'react'
import browser from "../images/browser.png"
import { useNavigate} from 'react-router-dom';
export default function Error() {
  const style={
    margin:"4rem",
    height:"60vh"
  }
  const navigate=useNavigate();
  const gotohome=()=>{
    navigate("/");
// console.log("hu")
  }
  return (
    <div className='c3c'>
        <h1 style={{margin:"2rem"}}>Oops</h1>
        <h2>Seems like this page does not exit please check the url again and try again</h2>
        <button className='errbtn' onClick={gotohome}><h3>go to homepage?</h3></button>
        <img style={style} src={browser} alt="errorimg"/>
    </div>
  );
}
