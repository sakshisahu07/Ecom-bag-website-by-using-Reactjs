import { useState, useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import edimg from "../images/edit.png";
import delimg from "../images/delete.jfif";
const Search=()=>{
  const [mydata, setMydata]= useState([]);
  const [editData, setEditData]=useState({});
  const loadData=()=>{
   let url="http://localhost:3000/students";
   axios.get(url).then((res)=>{
    setMydata(res.data);
   })
  }
  useEffect(()=>{
    loadData();
  }, []);
const myDel=(myid)=>{
   let url=`http://localhost:3000/students/${myid}` 
    axios.delete(url).then(()=>{
      alert("Record succesfully deleted!!!");
      loadData();
    });
  }
  const myEdit=(myid)=>{
    let url=`http://localhost:3000/students/${myid}`;
    axios.get(url).then((res)=>{
      setEditData(res.data);
      console.log(res.data);
    });

  }

 const handleInput=(e)=>{
      let name= e.target.name;
      let value=e.target.value;
      setEditData(values=>({...values, [name]:value}));
 }
 const handleSubmit=()=>{
let url=`http://localhost:3000/students/${editData.id}`;
  axios.put(url, editData).then(()=>{
    alert("record succesfully updated!!!");
    loadData();
  })
 }
  const ans=mydata.map((key)=>{
        return(
          <>
             <tr>
              <td> {key.rollno} </td>
              <td> {key.name} </td>
              <td> {key.city} </td>
              <td> {key.fees} </td>
              <td>               
                <a href="#">
                <img src={edimg}  width="30" height="30" onClick={()=>{myEdit(key.id)}} />
                </a>

                <a href="#">
                <img src={delimg}  width="30" height="30"  onClick={()=>{myDel(key.id)}} />
                </a>              
              </td>
             </tr>
          </>
        )
  })

  return(
        <>
          <h1> Search Students Record</h1>
           
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>   </th>
        </tr>
      </thead>
      <tbody>

           {ans}

        </tbody>
        </Table>

       <br/>
        <input type="hidden" name="recid" value={editData.id} />
         Edit Rollno <input type="text" name="rollno" value={editData.rollno} onChange={handleInput} />
         <br />
        Edit Name  <input type="text" name="name" value={editData.name} onChange={handleInput} />
        <br/>
        Edit City  <input type="text" name="city" value={editData.city} onChange={handleInput} />
        <br/>
        Edit Fees <input type="text" name="fees" value={editData.fees} onChange={handleInput} />
        <br/>
        <button onClick={handleSubmit}>Update Save!</button>
        </>
    )
}
export default Search;