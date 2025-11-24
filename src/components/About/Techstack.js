import React from "react";
import { Col, Row } from "react-bootstrap";
import Go from "../../Assets/TechIcons/go.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import CSS from "../../Assets/TechIcons/css.png";
import Django from "../../Assets/TechIcons/django1.jpeg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import HTML from "../../Assets/TechIcons/html.png";
import MYSQL from "../../Assets/TechIcons/mysql.jpeg";
import RESTAPIS from "../../Assets/TechIcons/restapis.webp";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="javascript" />
        <div className="tech-icons-text">Javascript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Go} alt="go" />
        <div className="tech-icons-text">Go</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="react" />
        <div className="tech-icons-text">React.Js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="git" />
        <div className="tech-icons-text">Git</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="Python" />
        <div className="tech-icons-text">Python</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} alt="Postman" />
        <div className="tech-icons-text">Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={CSS} alt="CSS" />
        <div className="tech-icons-text">CSS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={HTML} alt="HTML" />
        <div className="tech-icons-text">HTML</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={RESTAPIS} alt="RESTAPIS" />
        <div className="tech-icons-text">RestApis</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Django} alt="MYSQL" />
        <div className="tech-icons-text">Django</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={MYSQL} alt="MYSQL" />
        <div className="tech-icons-text">MYSQL</div>
      </Col>
    </Row>
  );
}

export default Techstack;
