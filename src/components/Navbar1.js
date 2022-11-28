import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Routes, Route, Link } from "react-router-dom";

function Navbar1() {
  return (
    <Navbar bg="light" expand="lg" >
      <Container>
        <Navbar.Brand><Link to="/"><img src="logo-ck.jpg" class="rounded" width="50px"/></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to="/" class="text-decoration-none text-reset">Home</Link></Nav.Link>
            <Nav.Link><Link to="/Produk" class="text-decoration-none text-reset">Produk</Link></Nav.Link>
            <Nav.Link><Link to="/Tentang" class="text-decoration-none text-reset">Tentang</Link></Nav.Link>
            <Nav.Link><Link to="/Faq" class="text-decoration-none text-reset">FAQ</Link></Nav.Link>            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;