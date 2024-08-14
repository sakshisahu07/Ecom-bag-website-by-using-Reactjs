import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, } from 'react-router-dom';
import { FaShoppingBag } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Topmenu=()=>{
    const myCart= useSelector((state)=>state.mycart.cart);
  const dataLength= myCart.length;
  const navigate=useNavigate();
    return(
        <>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Fashion</Navbar.Brand>
        <img src="public/images/l1.avif" width={100}  />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="cartproduct">My Cart</Nav.Link>
            <Nav.Link as={Link} to="searchproduct">Search Product</Nav.Link>
           
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
           
            <FaShoppingBag onClick={()=>{navigate("/cartproduct")}}/>
            {dataLength>=1? <span id="tokri">{dataLength}</span>:""}
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            <FaSearch />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}
export default Topmenu;