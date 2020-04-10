import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import About from "./components/About.js";

function App() {
  return (
    <>
      <Navbar className="nav-routes"/>
      <Jumbotron />
      <About />
    </>
  );
}

export default App;
