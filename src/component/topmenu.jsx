import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { FaShoppingBag } from "react-icons/fa";
import { useSelector } from 'react-redux';



const Topmenu=()=>{
    const myCart= useSelector((state)=>state.mycart.cart);
  const dataLength= myCart.length;
    return(
        <>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Fashion</Navbar.Brand>
        <img src="public/images/l1.avif" width={100}  />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Shop</Nav.Link>
            <Nav.Link href="#pricing">Product</Nav.Link>
            <Nav.Link href="#pricing">Foxkit</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>

          </Nav>
          <Nav>
            <Nav.Link href="#deets">
           
            <FaShoppingBag />

            <span id="tokri">{dataLength}</span>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}
export default Topmenu;