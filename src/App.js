import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Navbar className="nav-routes"/>
      <Jumbotron />
      <About />
      <Projects />
    </>
  );
}

export default App;
