import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

export default function Welcome() {
  const styles = {
    marginTop: "50px",
    backgroundColor: "rgba(255, 0, 0, 0)",
  };
  return (
    <Jumbotron fluid style={styles}>
      <Container>
        <h1>Welcome to my Portfolio Page</h1>
        <p>
          This is a Professional Portfolio page using react and react-bootstrap.
        </p>

        
        <br />

        <br />

        <h3>Skills</h3>
        <ul>
          <li>React.js</li>
          <li>Express.js</li>
          <li>Node.js</li>
          <li>ORM (sequelize)</li>
          <li>MySql</li>
          <li>MongoDB</li>
        </ul>

        <br />

        <br />

        <br />
        
      </Container>
    </Jumbotron>
  );
}
