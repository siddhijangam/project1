import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedCourses from "./components/FeaturedCourses";
import Skills from "./components/Skills";
import ExploreSubjects from "./components/ExploreSubjects";
import Courses from "./components/Courses";
import CommunityExperts from "./components/CommunityExperts";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import Features2 from "./components/Feature2";

import CoursesPage from "./pages/CoursesPage";
import AboutPage from "./pages/AboutPage";  
import ContactPage from "./pages/ContactPage"; 
import LoginPage from "./pages/LoginPage";  
import BlogPage from "./pages/BlogPage";   
import BlogDetail from "./pages/BlogDetail";

// Home Page
const HomePage = () => (
  <>
    <Hero />
    <FeaturedCourses />
    <Skills />
    <ExploreSubjects />
    <Courses />
    <CommunityExperts />
    <HeroSection />
  </>
);

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />  
        <Route path="/blog" element={<BlogPage />} />  
        <Route path="/BlogDetail" element={<BlogDetail/>} />  
        
      </Routes>
      <Footer />
    </Router> 
  );
};

export default App;
