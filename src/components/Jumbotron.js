import React from "react";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";

export default function Welcome() {
  const styles = {
    marginTop: "50px",
    backgroundColor: "rgba(255, 0, 0, 0)",
  };
  return (
    <Jumbotron fluid style={styles}>
      <Container id="#home">
        <h1 className='jumbo'>Welcome to my Portfolio Page</h1>
        <p>
          This is a Professional Portfolio page using react and react-bootstrap.
        </p>

        <br />

        <br />
        <Row>
          <Col>
            <h3>Skills</h3>
            <ul>
              <li>React.js</li>
              <li>Express.js</li>
              <li>Node.js</li>
              <li>ORM (sequelize)</li>
              <li>MySql</li>
              <li>MongoDB</li>
            </ul>
          </Col>
          <Col>
            <h3>Info</h3>
            <ul>
              <li>
                <strong>Email: </strong>dorntrevor7@gmail.com
              </li>
              <li>
                <strong>Cell: </strong>(480) 528-3164
              </li>
              <li>
                <a
                  style={{ color: "black" }}
                  href="https://github.com/dorntrevor7"
                  target="_Blank"
                >
                  <strong>GitHub Account</strong>
                </a>
              </li>
              <li>
                <a
                  style={{ color: "black" }}
                  href="https://www.linkedin.com/in/trevor-dorn-6b692419a/"
                  target="_Blank"
                >
                  <strong>LinkedIn Account</strong>
                </a>
              </li>
              <li>
                <a
                  style={{ color: "black" }}
                  href="./imgs/Resume-2020.pdf"
                  target="_Blank"
                >
                  <strong>Resume PDF</strong>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <br />
      </Container>
    </Jumbotron>
  );
}
