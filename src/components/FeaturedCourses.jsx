import React from "react";
import "./Feature.css";

function FeaturedCourses() {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-5 sid">Our Featured Courses</h2>

      <div id="courseCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">

          {/* Slide 1 */}
          <div className="carousel-item active">
            <div className="row">
              {/* Card 1 */}
              <div className="col-md-4">
                <div className="card shadow-sm h-100">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxGhMA-dQtZfuBharwy9htuOLwv1LPs43cQtqjsr8pGz4Wfg3kmpXE2O8lrEhHyiHiczU&usqp=CAU" className="card-img-top" alt="Course 1" style={{ height: "240px", objectFit: "cover" }}/>
                  <div className="card-body">
                    <h6 className="text-muted">User Experience</h6> 
                    <h5 className="card-title">Fundamental of UX for Application design</h5>
                    <p className="card-text">Learn tools & techniques to design better apps. The automated process all your website tasks. Discover tools and techniques to engage effectively with vulnerable children and young people.</p>
                    <div className="d-flex justify-content-between">
                      <span>⭐⭐⭐⭐☆ (4.5)</span>
                      <h5 className="text-primary mb-0">$135</h5>
                    </div>
                  </div>
                    <div className="card-footer bg-white text-center">
                   <button className="btn btn-outline-primary">Find Out More</button>
                   </div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="col-md-4">
                <div className="card shadow-sm h-100">
                  <img src="https://miro.medium.com/v2/resize:fit:1400/1*AqrGgu7igpKkblUWbt0AZg.jpeg"  className="card-img-top " alt="Course 2" style={{ height: "240px", objectFit: "cover" }}  />
                  <div className="card-body">
                    <h6 className="text-muted">Web Development</h6>
                    <h5 className="card-title">Modern Web with React</h5>
                    <p className="card-text">Master React, hooks, and modern web development. The automated process all your website tasks. Discover tools and techniques to engage effectively with vulnerable children and young people.</p>
                    <div className="d-flex justify-content-between">
                      <span>⭐⭐⭐⭐⭐ (5.0)</span>
                      <h5 className="text-primary mb-0">$199</h5>
                    </div>
                  </div>
                  <div className="card-footer bg-white text-center">
                   <button className="btn btn-outline-primary">Find Out More</button>
                   </div>
                </div>
              </div>
              {/* Card 3 */}
              <div className="col-md-4">
                <div className="card shadow-sm h-100">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5TkRfn1_faUGqIcsR7hIGqc-EwFhMBFJ2vw&s" className="card-img-top" alt="Course 3" style={{ height: "240px", objectFit: "cover" }} />
                  <div className="card-body">
                    <h6 className="text-muted">Data Science</h6>
                    <h5 className="card-title">Python for Data Science</h5>
                    <p className="card-text">Analyze and visualize data with Python & Pandas.The automated process all your website tasks. Discover tools and techniques to engage effectively with vulnerable children and young people.</p>
                    <div className="d-flex justify-content-between">
                      <span>⭐⭐⭐⭐☆ (4.7)</span>
                      <h5 className="text-primary mb-0">$150</h5>
                    </div>
                  </div>
                  <div className="card-footer bg-white text-center">
                   <button className="btn btn-outline-primary">Find Out More</button>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <div className="row">
              {/* Card 4 */}
              <div className="col-md-4">
                <div className="card shadow-sm h-100">
                  <img src="https://s3-ap-south-1.amazonaws.com/ricedigitals3bucket/AUPortalContent/2022/09/29160306/Number-Theory4.png" className="card-img-top" alt="Course 4" style={{ height: "240px", objectFit: "cover" }} />
                  <div className="card-body">
                    <h6 className="text-muted">AI & ML</h6>
                    <h5 className="card-title">Machine Learning Basics</h5>
                    <p className="card-text">Start your ML journey with real datasets. The automated process all your website tasks. Discover tools and techniques to engage effectively with vulnerable children and young people.</p>
                    <div className="d-flex justify-content-between">
                      <span>⭐⭐⭐⭐☆ (4.6)</span>
                      <h5 className="text-primary mb-0">$180</h5>
                    </div>
                  </div>
                  <div className="card-footer bg-white text-center">
                   <button className="btn btn-outline-primary">Find Out More</button>
                   </div>
                </div>
              </div>
              {/* Card 5 */}
              <div className="col-md-4">
                <div className="card shadow-sm h-100">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLj-m3rftgbj_I6umcd5UTHXzydyyfWYnUMQ&s" className="card-img-top" alt="Course 5" style={{ height: "240px", objectFit: "cover" }} />
                  <div className="card-body">
                    <h6 className="text-muted">Cloud</h6>
                    <h5 className="card-title">AWS Cloud Practitioner</h5>
                    <p className="card-text">Get started with Amazon Web Services (AWS). The automated process all your website tasks. Discover tools and techniques to engage effectively with vulnerable children and young people.</p>
                    <div className="d-flex justify-content-between">
                      <span>⭐⭐⭐⭐☆ (4.3)</span>
                      <h5 className="text-primary mb-0">$120</h5>
                    </div>
                  </div>
                  <div className="card-footer bg-white text-center">
                   <button className="btn btn-outline-primary">Find Out More</button>
                   </div>
                </div>
              </div>
              {/* Card 6 */}
              <div className="col-md-4">
                <div className="card shadow-sm h-100">
                  <img src="https://fortitudemsp.co.uk/wp-content/uploads/2024/09/cyber-security-in-derby.jpg" className="card-img-top" alt="Course 6" style={{ height: "240px", objectFit: "cover" }} />
                  <div className="card-body">
                    <h6 className="text-muted">Cyber Security</h6>
                    <h5 className="card-title">Ethical Hacking Essentials</h5>
                    <p className="card-text">Learn ethical hacking & penetration testing. The automated process all your website tasks. Discover tools and techniques to engage effectively with vulnerable children and young people.</p>
                    <div className="d-flex justify-content-between">
                      <span>⭐⭐⭐⭐☆ (4.4)</span>
                      <h5 className="text-primary mb-0">$140</h5>
                    </div>
                  </div>
                  <div className="card-footer bg-white text-center">
                   <button className="btn btn-outline-primary">Find Out More</button>
                   </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Carousel Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#courseCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#courseCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </section>
  );
}

export default FeaturedCourses;
