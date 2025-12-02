import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Banking System"
              description="– Built a secure
          API with endpoints for account creation, deposits, withdrawals,
          balance checks, and transaction history. Implemented models for account transation"
              ghLink="https://github.com/himateja27/django-banking-system"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Personal-Portfolio"
              description="My personal portfolio is built with React and Tailwind CSS. It showcases my projects, skills, and resume in a clean, modern interface. The site supports dark mode and features dynamic sections for work experience, education, and contact information. Content is easy to update using structured components, making it simple to highlight new projects or achievements."
              ghLink="https://github.com/himateja27/Personal-Portfolio"
              demoLink="https://personal-portfolio-black-pi.vercel.app/"
            />
          </Col>
          "
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Ride-Booking"
              description="A Golang(Gin)-based web application that allows users to register application and book rides, and view ride history. The system includes secure login, ride management, and admin controls, with backend APIs connected to a MySQL database and also used React js for user interface."
              ghLink="https://github.com/himateja27/ride-booking"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
