import React from "react";
import { Container, Row, Col } from "react-bootstrap";


const HeroSection = () => {
  return (
    
    <section className="skills-section py-5">
      <Container>
        <Row className="align-items-center">
              {/* LEFT SIDE */}
             <Col md={5} className="text-center">
            <div className="video-btn">
             <img src="https://ajayparmartutor.com/wp-content/uploads/2023/01/about3-1.webp" style={{width:"470px"}}></img>
            </div>
          </Col>
          
            {/* RIGHT SIDE */}
          <Col md={7}>
            <div className="d-flex align-items-center mb-3">
              
              <h2 className="sid">
               Learner outcomes on courses  <br />  you will take
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

         
         
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
