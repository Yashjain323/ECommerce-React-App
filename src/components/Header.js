import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "@mui/material";
import {NavLink} from 'react-router-dom';

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand className="heading">Litchies Admin</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navbarApni">
            <Nav.Link ><NavLink to="home">Home</NavLink></Nav.Link>
            <Nav.Link ><NavLink to="newRequests">New Requests</NavLink></Nav.Link>
            <Nav.Link><NavLink to="verifiedShopsList">Verified Shops</NavLink></Nav.Link>
            <Nav.Link ><NavLink to="blockedShops">Blocked Shops</NavLink></Nav.Link>
            <Nav.Link ><NavLink to="createShop">Create Shop</NavLink></Nav.Link>
          </Nav>
            <Button variant="contained" href="/" className="logout buttonCss">Logout</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;