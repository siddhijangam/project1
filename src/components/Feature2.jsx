// src/components/Features.jsx
import React from "react";
import "./Feature2.css"; 

const Features2 = () => {
  return (
     <section className="feature" style={{display:"flex" , gap: "25px" , marginLeft:"160px", marginTop:"20px", margin:"20px" }}>
        <div className="feature-card">
          <i className="bi bi-journal-bookmark"></i>
          <h3>60+ UX courses</h3>
          <p>The automated process all your website tasks.</p>
        </div>

        <div className="feature-card">
          <i className="bi bi-person-badge"></i>
          <h3>Expert instructors</h3>
          <p>The automated process all your website tasks.</p>
        </div>

        <div className="feature-card">
          <i className="bi bi-alarm"></i>
          <h3>Life time access</h3>
          <p>The automated process all your website tasks.</p>
        </div>
      </section>
  );
};

export default Features2;
