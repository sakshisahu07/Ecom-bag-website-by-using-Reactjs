import axios from "axios";
import { useState } from "react";
import {message} from "antd";

const Update=()=>{
  const [rollno, setRollno]=useState("");
  const [mydata, setMydata]=useState([])
  
  const [errMsg, setErrMsg]= useState(false);
  const handleSubmit=()=>{
    let url=`http://localhost:3000/students/?rollno=${rollno}`;
    axios.get(url).then((res)=>{
      setMydata(res.data);
      if (res.data.length>=1)
      {
        setErrMsg(false)
      }
      else
      {
        setErrMsg(true)
      }
    });
  }
  const ans=mydata.map((key)=>{
        return(
          <>
              <h1>Rollno : {key.rollno} </h1>
              <h2>  Name : {key.name}</h2>
              <h2> City : { key.city }</h2>
              <h1> Total Fees : {key.fees}</h1>
          </>
        )    
  })



  return(
        <>
          <h1> Search Students Record</h1>
          Enter Rollno : <input type="text" 
          value={rollno} onChange={(e)=>{setRollno(e.target.value)}} />
          <button  onClick={handleSubmit}>Search</button>
          <hr size="4"color="blue"/>
           {ans.length>=1 ? ans :(  errMsg? message.error("Rollno Not Found"): "")}
        </>
    )
}


export default Update;