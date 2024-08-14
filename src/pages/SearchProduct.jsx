import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addtoCart } from "../CartSlice";

const SearchProduct=()=>{
    const [val,setVal]=useState("");
    const [mydata,setMydata]=useState([]);
    const dispatch=useDispatch();

    const handleChange=(e)=>{
        setVal(e.target.value);
        let api=`http://localhost:3000/product`;
        axios.get(api).then((res)=>{
            setMydata(res.data);
        })
    }

    const DataCart=(pid, nm, img, desc, price)=>{
        dispatch(addtoCart({id: pid, name:nm, image:img, description:desc,qnty:1, price:price}))
     }
    
     const ans=mydata.map((key)=>{
        let str=key.name;
        let status=str.includes(val);

        if(status==true)
        {
            return(
                <>
                 <Card style={{ width: '18rem', margin:"auto", margin:"20px" }}>
    <Card.Img variant="top" src={"public/images/"+key.images} width="100" height="80" />
    <Card.Body>
      <Card.Title>{key.name}</Card.Title>
      <Card.Text>
       {key.description}
      </Card.Text>
       <Button variant="primary" 
        onClick={()=>{DataCart(key.id, key.name, key.images, key.description, key.price)}}>Add to Cart</Button>
    </Card.Body>
  </Card>
                </>
            )
        }
     })
    return(
        
        <>
        <center>
        <h1 align="center">Search Your Product</h1>
        Enetr Product:
        <input type="text" value={val} onChange={handleChange}/>
        </center>
        <hr />

        <div id="cartdata"  >
        {ans}
        </div>
        </>
    )
}
export default SearchProduct;