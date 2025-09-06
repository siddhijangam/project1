import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Navbar.css"

const Courses = () => {
  return (
    
    <section className="skills-section py-5">
      <Container>
        <Row className="align-items-center">
              {/* LEFT SIDE */}
             <Col md={5} className="text-center">
            <div className="video-btn">
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ-D0n2Hg9XLyC4dyjGrz7onDD4AkhWBkqhw&s" style={{width:"470px"}}></img>
            </div>
          </Col>
          
            {/* RIGHT SIDE */}
          <Col md={7}>
            <div className="d-flex align-items-center mb-3">
              
              <h2 className="sid">
              Take the next step toward your <br />personal and professional<br /> goals with us.
              </h2>
            </div>

            <p className="text-muted">
              The automated process all your website tasks. Discover tools and
              techniques to engage effectively with vulnerable children and
              young people.
            </p>

            <div className="buttons">
        <button className="join-btn">Join now for free</button>
        
      </div>
          </Col>

         
         
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
