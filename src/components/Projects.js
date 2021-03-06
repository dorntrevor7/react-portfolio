import React from "react";
import { Container, Card, Button, Row, Col, Img } from "react-bootstrap";
import Burger from './images/burger.png';
import Fitness from './images/fitness.png';
import Tracker from './images/tracker.png';

export default function Projects() {
  const stylehead = {
    padding: "30px",
    textShadow: "2px 2px #fad67b",
  };
  return (
    <Container id="projects">
      <Container>
        <Row>
          <h3 style={stylehead}>Projects</h3>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col sm={12} lg={4} style={{ marginBottom: "25px" }}>
            <Card className="cardStyle">
              <Card.Img variant="top" src={Fitness} alt="Img of NoSql app"/>
              <Card.Body>
                <Card.Title>Workout Tracker / NoSql</Card.Title>
                <Card.Text>
                  This app requires Mongo database with a Mongoose schema and
                  handle routes with Express. Creating an app to get fit and
                  keep track of your progess!
                </Card.Text>
                <Row>
                  <Col>
                    <Button
                      variant="info"
                      href="https://github.com/dorntrevor7/NoSQL-Workout-Tracker"
                    >
                      Github
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      variant="info"
                      href="https://tranquil-chamber-85100.herokuapp.com/"
                    >
                      Open App
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} lg={4} style={{ marginBottom: "25px" }}>
            <Card className="cardStyle">
              <Card.Img
                variant="top"
                src={Burger}
                alt="Img of Burger app"
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
                    <Button
                      variant="info"
                      href="https://github.com/dorntrevor7/Burger-Bucketlist"
                    >
                      Github
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      variant="info"
                      href="https://frozen-shore-70892.herokuapp.com/"
                    >
                      Open App
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} lg={4} style={{ marginBottom: "25px" }}>
            <Card className="cardStyle">
              <Card.Img variant="top" src={Tracker} 
              alt="Img of Budget Tracker app"/>
              <Card.Body>
                <Card.Title>Budget Tracker / PWA</Card.Title>
                <Card.Text>
                  In this project The user will be able to add expenses and
                  deposits to their budget with or without a connection and
                  populate the total when brought back online.
                </Card.Text>
                <Row>
                  <Col>
                    <Button
                      variant="info"
                      href="https://github.com/dorntrevor7/Budget-Tracker"
                    >
                      Github
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      variant="info"
                      href="https://strawberry-cobbler-31824.herokuapp.com/"
                    >
                      Open App
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <br />

      <br />
     
      <br />
    </Container>
  );
}
