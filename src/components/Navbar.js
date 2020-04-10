import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function navbar() {
    const stylesr = {
        marginLeft: '60px',
        marginTop: '20px',
        marginBottom: '20px'
    }
    const stylesl = {
        marginRight: '80px',
        color: 'white'
    }
  return (
    <>
      <Navbar bg="dark" variant="dark" className="colorfonts">
        <Navbar.Brand href="#home" style={stylesr}>Trevor Dorn</Navbar.Brand>
        <Nav className="ml-auto" style={stylesl}>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#portfolio">Portfolio</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}