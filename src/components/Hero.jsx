import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Online learning platform</h1>
          <p>
            Build skills with courses, certificates, and degrees online <br />
            from world-class universities and companies
          </p>
          <button className="hero-btn">Join For Free</button>
        </div>
      </section>

      {/* Features Section - comes below hero */}
      <section className="features">
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
    </>
  );
}

export default Hero;
