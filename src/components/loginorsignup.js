import { Link } from "react-router-dom";
import previous from "../images/previous.png"
export default function Loginorsignup({status,statename,stateemail,handlesubmit,setStatename,setStateemail}){
    return(
        <>
        <Link to="/"><img src={previous} alt="" className="previousimg"/></Link>
        <div className="signupdiv">
            <form onSubmit={handlesubmit}>
                <h1>
                    Enter credentials
                </h1>
                <div className="inputarea1">
                    <label htmlFor="name" >Name: </label>
                    <input type="text" id="name" value={statename} onChange={(e)=>setStatename(e.target.value)}/> 
                </div>
                <div className="inputarea2">
                    <label  htmlFor="email" >Email: </label>
                    <input type="email" id="email" value={stateemail} onChange={(e)=>setStateemail(e.target.value)}/> 
                </div>
                <button type="submit" >{status==="li" ? "log in" : "sign up"}</button>
                {status==="li" ? <Link to="/signup">Sign up Instead</Link> :  <Link to="/login">Login Instead</Link>}
            </form>           
        </div>
        </>
    );
}
