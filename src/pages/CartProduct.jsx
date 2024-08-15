import { useSelector,useDispatch } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import {cartrecDel,addQnty,DelQnty } from "../CartSlice"
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
const CartProduct=()=>{
    const mycart=useSelector((state)=>state.mycart.cart)
    const dispatch = useDispatch();

    const cartRecDel=(id)=>{
        dispatch(cartrecDel(id))
    }


    const qtyInc=(id)=>{
        dispatch(addQnty(id))
    }
    
    const qtyDec=(id)=>{
      dispatch(DelQnty(id))
    }
    let totalAmount=0;
    const ans=mycart.map((key)=>{
        totalAmount+=key.price*key.qnty;
        return(
            <>
            <tr>
                <td> <img src={"public/images/"+key.image} width="100" height="80"/> </td>
                <td>{key.name}</td>
                <td>{key.description}</td>
                <td>{key.price}</td>
                <td>
                <a href="#"> 
                <FaMinusCircle onClick={()=>{qtyDec(key.id)}} />
                  
               </a>
                   
                   <span style={{paddingLeft:"5px", paddingRight:"5px", fontWeight:"bold"}}> {key.qnty}  </span>
                  
                  <a href="#">
                  <FaPlusCircle onClick={()=>{qtyInc(key.id)}} />
                  </a>
                  
                   
                   
                </td>
                <td> {key.price*key.qnty} </td>
                <td> 

                 <Button variant="primary" size="sm" onClick={()=>{cartRecDel(key.id)}}>Delete</Button>    
                    
                </td>
            </tr>
            </>
        )
    })
    return(
        <>
        <h1 align="center">Your Product Cart</h1>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th> Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total Price</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {ans}
        <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th>Total Amount: </th>
            <th>{totalAmount}</th>
        </tr>
      </tbody>
      </Table>
        </>
    )
}
export default CartProduct;