import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";
import loading from "../Loading/XOsX.gif";
import { useContext } from "react";
import { ShopContext } from "./ShopContextProvider";
export default function Content4() {
    const navigate=useNavigate();
    const {cartItems,addtocart,removefromcart}=useContext(ShopContext);
  const [data]=useFetch("https://adorable-bat-fatigues.cyclic.app/best-foods");
 
  if(!data.find((product)=>product.id===data[data.length-1].id)){
    return (
      <div className='loadingproductsingle'>
        <img src={loading} alt="loading"/>
        <h1>Loading...</h1>
      </div>
    );
  }
  // console.log("data",data[1],"is here")
  const handleerror=(e)=>{
       e.currentTarget.parentNode.style.display="none"
  }
  // const handleclick=(e)=>{
  //   console.log(e.currentTarget.childNodes[0].alt)
  //   navigate(`/products/${}`);
  // }
  return(
    <>
    <div className="content2">
        <h1 className="simple">Shop the motheree food</h1>
        <h2>A Taste That Never Vanishes Away</h2>
        </div>
    <div className="categorycontent">
            <div className="categorycontentimg">
    {data && data.map((item)=>{
    if(item.img && item.price && item.name){
        return  (
          // <>
          <div key={item.id} className="categorycontentimgin s2" >
            <img onError={handleerror} src={item.img} alt={item.id} onClick={()=>navigate(`/products/${item.id}`)}/> 
            <span onClick={()=>navigate(`/products/${item.id}`)}>{item.name}</span>
            <span onClick={()=>navigate(`/products/${item.id}`)}>${item.price}</span>
            <div className="cartaction">
              <button className="removefromcartminus" onClick={()=>{removefromcart(item.id)}}>-</button>
              <button className="addtocartplus" onClick={()=>{addtocart(item.id)}}>+</button>
              </div>
              <p onClick={()=>navigate(`/products/${item.id}`)}>{cartItems[item.id]===0 ? "" :`In cart:${cartItems[item.id] && cartItems[item.id]}`}</p>
            </div>
          // </>
            
    )
    }
    else{
      return <></>;
    }
    })}
    </div>
    </div>
    </>
   );
}



