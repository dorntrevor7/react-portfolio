import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

export default function navbar() {
  const stylesr = {
    fontSize: "40px",
    marginLeft: "60px",
    marginTop: "20px",
    textShadow: "3px 3px #a78334",
  };
  const stylesl = {
    marginRight: "80px",
    color: "white",
  };
  return (
    <>
      <Router>
        <Navbar
          bg="dark"
          variant="dark"
          className="colorfonts"
          style={{ boxShadow: "0px 10px 10px 10px #343a40" }}
        >
          <Navbar.Brand href="#home" style={stylesr}>
            Trevor Dorn
          </Navbar.Brand>
          <Nav className="ml-auto" style={stylesl}>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar>
      </Router>
    </>
  );
}
