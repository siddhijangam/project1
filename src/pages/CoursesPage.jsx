import React from "react";
import FeaturedCourses from "../components/FeaturedCourses";
import ExploreSubjects from "../components/ExploreSubjects";
import Features2 from "../components/Feature2";


const CoursesPage = () => {
  return (
    <div>
      {/* Hero Section with Gradient Background */}
      <section
        className="hero-courses"
        style={{
          height: "300px",
          padding: "80px",
          textAlign: "center",
          backgroundImage:
            "linear-gradient(90deg, #8905c7ff 0% , #cb5cffff 0%, #5c05c7ff 0%, #c513b9ff 70%, #850094ff 100%)", // 🌈 gradient
          color: "white",
          display: "flex",
          flexDirection: "column", 
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            color: "white",
            margin: 0,
          }}
        >
          Our Courses
        </h1>

        {/* Breadcrumb */}
        <p style={{ fontSize: "16px", color: "#f1f1f1", margin:0 }}>
          Home | Courses
        </p>
      </section>

      <FeaturedCourses />
      <ExploreSubjects />
      <Features2 />
    </div>
  );
};

export default CoursesPage;
