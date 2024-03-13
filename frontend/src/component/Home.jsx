import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import collegeLogo from './logo.png';
import { Link } from 'react-router-dom';
import './Home.css'; // Import CSS for styling

const Home = () => {
  return (
    <>
      <Navbar bg="#000" variant="dark" expand="md" style={{ height: "75px", backgroundColor: "#000" }}>
        <Navbar.Brand href="/">
          <img
            src={collegeLogo}
            width="70"
            height="70"
            className="d-inline-block align-top"
            alt="College Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <span className="nav-title">Excalibur</span>
          </Nav>
          <Nav className="ml-auto">
            <Link to='/events' className="nav-link" style={{color:"white"}}>Events</Link>
            <Link to='/register' className="nav-link" style={{color:"white"}}>Register</Link>
            <Link to='/contact' className="nav-link" style={{color:"white"}}>Contact us</Link>
            <Link to='/aboutus' className="nav-link" style={{color:"white"}}>About us</Link>
            <Link to='/team' className="nav-link" style={{color:"white"}}>Team</Link>
            <Link to='/faq' className="nav-link" style={{color:"white"}}>FAQ</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Home;
