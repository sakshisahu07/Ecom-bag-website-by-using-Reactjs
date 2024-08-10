





import Carousel from 'react-bootstrap/Carousel';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Home=()=>{
    //  ======================== Add To Cart Functionality ============================

    const [mydata,setMydata]=useState([]);

    const loadData=()=>{
        let api="http://localhost:3000/product";
        axios.get(api).then((res)=>{
            setMydata(res.data)
        })
    }

    useEffect(()=>{
        loadData();
    },[])

    const ans=mydata.map((key)=>{
        return(
            <>
               <Card style={{ width: '18rem', margin:"auto", margin:"20px" }}>
    <Card.Img variant="top" src={key.images} style={{width:"100%",height:"300px"}} />
    <Card.Body>
      <Card.Title>{key.name}</Card.Title>
      <Card.Text>
       {key.description}
      </Card.Text>
      <Button variant="primary">Add To Cart</Button>
    </Card.Body>
  </Card>
            </>
        )
    })

    
    return(
        <>
          {/* =============================== Carousel =================================== */}

   <Carousel>
      <Carousel.Item>
        <a href="#"> <img src="public/images/8.jpg"  width="100%" height="650px" /> </a>
        
        <Carousel.Caption>
          <h3>First slide label</h3>
           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
         </Carousel.Caption>
       </Carousel.Item>
       <Carousel.Item>
         <a href="#"> <img src='public/images/9.jpg' width="100%" height="650px" /> </a>
        
         <Carousel.Caption>
           <h3>Second slide label</h3>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
       </Carousel.Item>
       <Carousel.Item>
       <a href="#"> <img src='public/images/10.jpg' width="100%" height="650px" /> </a>
         <Carousel.Caption>
           <h3>Third slide label</h3>
           <p>
             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
           </p>
         </Carousel.Caption>
       </Carousel.Item>

       <Carousel.Item>
       <a href="#"> <img src='public/images/10.jpg' width="100%" height="650px" /> </a>
         <Carousel.Caption>
           <h3>Third slide label</h3>
           <p>
             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
           </p>
         </Carousel.Caption>
       </Carousel.Item>

       <Carousel.Item>
       <a href="#"> <img src='public/images/10.jpg' width="100%" height="650px" /> </a>
         <Carousel.Caption>
           <h3>Third slide label</h3>
         <p>
             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
           </p>
         </Carousel.Caption>
       </Carousel.Item>
     </Carousel>



    
  

    {/* ================================= Add To Cart ================================== */}

    { <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap", width:"90%",margin:"auto"}}>
         {ans}
    </div>   
        }

        </>
    )
}
export default Home;