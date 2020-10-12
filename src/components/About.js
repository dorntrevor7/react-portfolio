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
    <Container id="about">
      <br />
      <Image
        style={image}
        src="https://avatars1.githubusercontent.com/u/59455474?s=460&u=714ce59b4e66094f8f5c06a49bbeb7a292541188&v=4"
        alt="Picture of Trevor Dorn"
        roundedCircle
      />
      <div style={contain}>
        <h3 style={stylehead}>About Me</h3>
        <hr />
        <p style={stylebody}>
          Full Stack Web Developer and graduate from the University of Arizona
          Coding Bootcamp. Learned and developed skills for JavaScript, React,
          CSS, HTML, and Java ​to ensure my clients have an absolute advantage
          over their competition resulting by designing new and captivating
          experiences​. Team leader while being a teammate, competitive and a
          quick learner. E​quipped with soft skills like working
          collaboratively, managing time, and being innovative with a team to
          ensure optimal results for user-centered and technology-centered
          designs.
        </p>
      </div>
    </Container>
  );
}
