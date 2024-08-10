import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { FaShoppingBag } from "react-icons/fa";




const Topmenu=()=>{
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

            <span id="tokri"></span>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}
export default Topmenu;