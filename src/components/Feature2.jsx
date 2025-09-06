// src/components/Features2.jsx
import React from "react";
import "./Feature2.css"; 

const Features2 = () => {
  return (
    <section className="features">
      <div className="feature-card">
        <i className="bi bi-journal-bookmark"></i>
        <div>
          <h3>60+ UX courses</h3>
          <p>The automated process all your website tasks.</p>
        </div>
      </div>

      <div className="feature-card">
        <i className="bi bi-person-badge"></i>
        <div>
          <h3>Expert instructors</h3>
          <p>The automated process all your website tasks.</p>
        </div>
      </div>

      <div className="feature-card">
        <i className="bi bi-alarm"></i>
        <div>
          <h3>Life time access</h3>
          <p>The automated process all your website tasks.</p>
        </div>
      </div>
    </section>
  );
};

export default Features2;
