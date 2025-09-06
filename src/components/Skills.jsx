import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills-section py-5">
      <Container>
        <Row className="align-items-center">
          {/* LEFT SIDE */}
          <Col md={7}>
            <div className="d-flex align-items-center mb-3">
              <div className="icon-circle me-3">
                <i className="fas fa-chart-line"></i>
              </div>
              <h2 className="sid">
                Learn new skills online with <br /> top educators
              </h2>
            </div>

            <p className="text-muted">
              The automated process all your website tasks. Discover tools and
              techniques to engage effectively with vulnerable children and
              young people.
            </p>

            <ul className="list-unstyled mt-3">
              <li className="mb-2">
                <i className="text-warning me-2 fas fa-check"></i>
                Techniques to engage effectively with vulnerable children and
                young people.
              </li>
              <li className="mb-2">
                <i className="text-warning me-2 fas fa-check"></i>
                Join millions of people from around the world learning together.
              </li>
              <li className="mb-2">
                <i className="text-warning me-2 fas fa-check"></i>
                Online learning is as easy and natural.
              </li>
            </ul>
          </Col>

          {/* RIGHT SIDE */}
          <Col md={5} className="text-center">
            <div className="video-btn">
              <a
                href="https://youtu.be/oH9DWKMM0Os?si=SVP4U3h9s-dGZQ_V"
                target="_blank"
                rel="noopener noreferrer"
                className="play-icon"
              >
                <i className="fas fa-play"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
