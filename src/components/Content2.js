import data from "../filters/strAreawithimg.js"
import construction from "../images/traffic.png"
export default function Content2(){
    return(
        <>
        <br/>
        <br/>
        <h1>Choose your category by area</h1>
        <br/>
        <div className="categorycontent" >
            <div className="categorycontentimg" >
                {data.map((item)=>{
                    return (
                    <div key={item.strArea} className="categorycontentimgin" onClick={(e)=>{e.currentTarget.firstChild.src=construction ; e.currentTarget.childNodes[1].textContent="Area not developed yet"}}>
                    <img src={item.img} alt={item.strArea}/>
                    <p >{item.strArea}</p>
                </div>
                // {document.getElementsByClassName("")}
                );
                })}
            </div>
        </div>
        </>
    );
}
