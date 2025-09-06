import React from "react";
import "./HeroSection.css";

const HeroSectionn = () => {
  return (
    <div>
      {/* Hero Content */}
      <section className="hero">
        <h1>Learn UX Design</h1>
        <p>Master courses from the best instructors online.</p>
        <button className="cta-btn">Get Started</button>
      </section>

      {/* Cards Section */}
      <section className="features">
        <div className="feature-card">
          <div className="icon">📚</div>
          <h3>60+ UX courses</h3>
          <p>The automated process all your website tasks.</p>
        </div>

        <div className="feature-card">
          <div className="icon">👩‍🏫</div>
          <h3>Expert instructors</h3>
          <p>The automated process all your website tasks.</p>
        </div>

        <div className="feature-card">
          <div className="icon">⏰</div>
          <h3>Life time access</h3>
          <p>The automated process all your website tasks.</p>
        </div>
      </section>
    </div>
  );
};

export default HeroSectionn;
