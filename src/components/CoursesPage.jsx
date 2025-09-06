import React from "react";
import FeaturedCourses from "../components/FeaturedCourses";
import ExploreSubjects from "../components/ExploreSubjects";
import Skills from "../components/Skills";
import CommunityExperts from "../components/CommunityExperts";

const CoursesPage = () => {
  return (
    <div>
      <section className="hero-courses">
        <h1>Our Courses</h1>
      </section>

      <FeaturedCourses />
      <Skills />
      <ExploreSubjects />
      <CommunityExperts />
    </div>
  );
};

export default CoursesPage;
