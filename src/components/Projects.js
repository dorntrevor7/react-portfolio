import React from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";

export default function Projects() {
  const contain = {
    marginBottom: "80px",
    padding: "30px",
  };
  const stylehead = {
    marginBottom: "30px",
    textShadow: "2px 2px #fad67b",
  };
  return (
    <Container>
      <div style={contain}>
        <h3 style={stylehead}>Projects</h3>
        <Row>
          {/* react.js projects */}
          <Col>
            {/* NoSql projects */}
            <Card style={{ width: "18rem", height: "25rem" }}>
              <Card.Img variant="top" src="./imgs/sc-nosql-workout.png" />
              <Card.Body>
                <Card.Title>Workout Tracker / NoSql</Card.Title>
                <Card.Text>
                  This app requires Mongo database with a Mongoose schema and
                  handle routes with Express. Creating an app to get fit and
                  keep track of your progess!
                </Card.Text>
                <Row>
                  <Col>
                    <Button variant="info">
                      {"Github"}
                      <a href="https://github.com/dorntrevor7/NoSQL-Workout-Tracker" />
                    </Button>
                  </Col>
                  <Col>
                    <Button variant="info">
                      {"Open App"}
                      <a href="https://tranquil-chamber-85100.herokuapp.com/" />
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          {/* Handlebars project */}
          <Col>
            <Card style={{ width: "18rem", height: "25rem" }}>
              <Card.Img
                style={{ width: "18rem", height: "10rem" }}
                variant="top"
                src="./imgs/SC-BURGER.png"
              />
              <Card.Body>
                <Card.Title>Burger Bucketlist / HBS</Card.Title>
                <Card.Text>
                  In this project (using Handlebars) you can eat new burgers
                  that you want to try and be able to delete the burger or move
                  it to the eaten section of the page.
                </Card.Text>
                <Row>
                  <Col>
                    <Button variant="info">
                      {"Github"}
                      <a href="https://github.com/dorntrevor7/Burger-Bucketlist" />
                    </Button>
                  </Col>
                  <Col>
                    <Button variant="info">
                      {"Open App"}
                      <a href="https://frozen-shore-70892.herokuapp.com/" />
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          {/* PWA Project Online/Offline */}
          <Col>
            <Card style={{ width: "18rem", height: "25rem" }}>
              <Card.Img variant="top" src="./imgs/sc-pwa.png" />
              <Card.Body>
                <Card.Title>Budget Tracker / PWA</Card.Title>
                <Card.Text>
                  In this project The user will be able to add expenses and
                  deposits to their budget with or without a connection and
                  populate the total when brought back online.
                </Card.Text>
                <Row>
                  <Col>
                    <Button variant="info">
                      {"Github"}
                      <a href="https://github.com/dorntrevor7/Budget-Tracker" />
                    </Button>
                  </Col>
                  <Col>
                    <Button variant="info">
                      {"Open App"}
                      <a href="https://strawberry-cobbler-31824.herokuapp.com/" />
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
