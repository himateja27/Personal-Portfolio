import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m{" "}
            <span className="purple">Hima Teja Vankayalapati</span> from{" "}
            <span className="purple">Tirupati, India</span>.
            <br />
            <br />
            I’m an aspiring <span className="purple">
              Software Developer
            </span>{" "}
            passionate about
            <span className="purple"> Full‑Stack Web Development</span> and
            <span className="purple"> Backend API Design</span>.
            <br />I hold a{" "}
            <span className="purple">Bachelor of Technology</span> in
            <span className="purple">
              {" "}
              Electronics and Communication Engineering
            </span>{" "}
            from
            <span className="purple"> Sree Rama Engineering College</span>.
            <br />I specialize in{" "}
            <span className="purple">React, Golang, Django, and MYSQL</span>,
            and I enjoy building{" "}
            <span className="purple">modern, scalable web applications</span>.
            <br />
            My goal is to create{" "}
            <span className="purple">interactive portfolio projects </span>
            that showcase professional standards and creativity.
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Technologies ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Hima Teja</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
