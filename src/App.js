import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Router>
        <Navbar className="nav-routes" />
        <Jumbotron />
        <About />
        <Projects />
        <Contact />
      </Router>
    </>
  );
}

export default App;
