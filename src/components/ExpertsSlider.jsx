import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

export default function ExpertsSlider() {
  const experts = [
    {
      name: "Mr. Uttom",
      img: "https://via.placeholder.com/150",
      desc: "The automated process all your website tasks.",
    },
    {
      name: "Mr. Shakil",
      img: "https://via.placeholder.com/150",
      desc: "The automated process all your website tasks.",
    },
    {
      name: "Mr. Arafat",
      img: "https://via.placeholder.com/150",
      desc: "The automated process all your website tasks.",
    },
    {
      name: "Mr. Saiful",
      img: "https://via.placeholder.com/150",
      desc: "The automated process all your website tasks.",
    },
  ];

  return (
    <div className="container my-5">
      <h3 className="text-center fw-bold mb-4">Community Experts</h3>
      <Carousel indicators={false} controls={true} interval={3000}>
        {experts.map((exp, i) => (
          <Carousel.Item key={i}>
            <div className="d-flex justify-content-center text-center">
              <div>
                <img
                  src={exp.img}
                  alt={exp.name}
                  className="rounded-circle mb-3"
                  style={{ width: "150px", height: "150px", objectFit: "cover" }}
                />
                <h5 className="text-primary">{exp.name}</h5>
                <p className="text-muted">{exp.desc}</p>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}