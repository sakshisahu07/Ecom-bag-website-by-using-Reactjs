import { useLocation } from "react-router-dom";
import { useState,useEffect } from "react";

const ProductDisplay=()=>{
    const [mypro,setMypro]=useState({
        id:"",
        name:"",
        description:"",
        images:"",
        price:""
    })
    const location=useLocation();
    useEffect(()=>{
        setMypro(
            {
                id:location.state.id,
                name:location.state.name,
                description:location.state.description,
                images:location.state.images,
                price:location.state.price
            }
        )
    },[])
    return(
        <>
        <h1>Our Product Display here!!!</h1>
        <div id="productdata">
            <div>
                <img src={`public/images/${mypro.images}`} style={{height:"300px",width:"300px"}} />
            </div>
            <div>
                <h2>Product name:{mypro.name}</h2>
                <h4 style={{color:"blue"}}>Description:{mypro.description}</h4>
                <h2 style={{color:"red"}}>Price:{mypro.price}</h2>
                <button>Add to cart</button>
            </div>

        </div>
        </>
    )
}
export default ProductDisplay;