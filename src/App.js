// import { BrowserRouter } from 'react-router-dom';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
// import Navbar from './components/Navbar';
import Signup from './pages/signup.js';
import Home from './pages/Home';
import Login from './pages/login';
import About from './pages/About';
import Aboutme from './pages/Aboutme';
import Error from "./pages/Error.js";
import Singleproduct from './components/Singleproduct';
import ShopContextProvider from './components/ShopContextProvider';
import Cart from "./pages/Cart";
import Products from "./pages/Products"
import Fav from './pages/Fav';
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <BrowserRouter>
      {/* <Home/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>} />
        {/* <Route path="/trending" /> */}
        <Route path="/favourites" element={<Fav/>} />
        {/* <Route path="/profile" /> */}
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:productid" element={<Singleproduct/>}/>
        <Route path="/aboutme" element={<Aboutme/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
      </BrowserRouter>
      </ShopContextProvider>
      </div>
  );
}

export default App;
