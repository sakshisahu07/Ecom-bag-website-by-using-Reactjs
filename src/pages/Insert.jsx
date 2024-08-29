import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';

import { message } from "antd";

const Insert=()=>{

const [input, setInput]= useState({})

const handleInput=(e)=>{
    let name= e.target.name;
    let value=e.target.value;
    setInput(values=>({...values, [name]:value}));
    console.log(input);

}

const handleSubmit=(e)=>{
    e.preventDefault();
 
     if (input.rollno=="")
     {
      message.error("Enter Rollno");
     }
     else 
     if (input.name=="")
      {
       message.error("Enter Name");
      }
      else
      if (input.city=="")
        {
         message.error("Enter City");
        }
        else
        if (input.fees=="")
          {
           message.error("Enter Fees");
          }
      else 
      {
    let url="http://localhost:3000/students";
    axios.post(url, input).then((res)=>{
   message.success("data save!!")
    setInput({
      rollno:"",
      name:"",
      city:"",
      fees:""
    })
   }).catch((err)=>{
    console.log("Error in Inserting!!")
   });
}
}

    return(
        <>
        <div className='divcenter'>
          <h1> Insert Students Record</h1>

          <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Rollno</Form.Label>
        <Form.Control type="text" name="rollno" value={input.rollno}   onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" value={input.name}  onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" name="city" value={input.city}  onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Fees </Form.Label>
        <Form.Control type="text" name="fees" value={input.fees}  onChange={handleInput} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    </div>
        </>
    )
}
export default Insert;