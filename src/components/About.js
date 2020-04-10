import React from "react";
import { Image, Container } from "react-bootstrap";

export default function About() {
  const contain = {
    borderRadius: "10px",
    marginBottom: "80px",
    padding: "30px",
    backgroundColor: "rgba(254, 254, 254, 0.55)",
  };
  const stylebody = {
    marginTop: "30px",
  };
  const stylehead = {
    textShadow: "2px 2px #fad67b",
  };
  const image = {
    marginBottom: "30px",
  };
  return (
    <Container>
      <Image
        style={image}
        src="https://avatars3.githubusercontent.com/u/59455474?s=300&v=4"
        alt="Picture of Trevor Dorn"
        roundedCircle
      />
      <div style={contain}>
        <h3 style={stylehead}>About Me</h3>
        <hr />
        <p style={stylebody}>
          Hello, my name is Trevor Dorn. I was born and raised in Chandler,
          Arizona. I graduated from Basha High School in May of 2018. All
          throughout my childhood and high school career I played sports. I have
          gotten told that I look like a jock, but am a dork inside. I love to
          have fun, party, and just hang out with friends. I am aspiring to be a
          full-stack web developer and apply the skills I have learned to
          achieve that goal. I may fail, but I never stop trying, I am a hard
          worker, I take risks, and never regret, just look forward. I am a
          boolean method whose love will always return true.
        </p>
      </div>
    </Container>
  );
}
