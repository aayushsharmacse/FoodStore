import '../App.css';
import Fleft from "../components/Fleft";
// import Fright from "../components/Fright";
import Content2 from "../components/Content2.js";
import Navbar from '../components/Navbar';
import Content3 from '../components/Content3.js';
import Footer from '../components/Footer';
import Content4 from "../components/Content4";
import Mobilenav from "../components/Mobilenav"
// import { Link } from 'react-router-dom';
// import cartlogo from "../images/001-carts.png"
export default function Home() {
  return (
    <div className="Home">
          {/* <Link to="/cart"><img className="fullsticky" src={cartlogo} alt="cartlogo"/></Link> */}
      <Navbar/>
{/* <Mobilenav/> */}
      <div className='fmain'>
          <Fleft />
          {/* <Fright />  */}
        </div>
        <br/>
        <br/>
        <Content4/>
        <Content2/>
        <Content3/>
        <Footer/>       
    </div>
  );
}