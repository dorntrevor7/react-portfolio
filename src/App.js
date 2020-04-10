import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";

function App() {
  return (
    <>
      <Navbar className="nav-routes"/>
      <Jumbotron />
    </>
  );
}

export default App;