import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ExploreSubjects.css"; // custom CSS import

const subjects = [
  { img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c", title: "PROGRAMMING" },
  { img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d", title: "PROGRAMMING" },
  { img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9", title: "PROGRAMMING" },
  { img: "https://images.unsplash.com/photo-1603574670812-d24560880210", title: "PROGRAMMING" },
  { img: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f", title: "PROGRAMMING" },
  { img: "https://images.unsplash.com/photo-1512446816042-444d641267d4", title: "PROGRAMMING" },
  { img: "https://images.unsplash.com/photo-1555949963-aa79dcee981f", title: "PROGRAMMING" },
  { img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d", title: "PROGRAMMING" },
];

export default function ExploreSubjects() {
  return (
    <section className="py-5 text-center">
      <div className="container">
        <h2 className="mb-5 fw-semibold sid">Explore top subjects</h2>

        <div className="row g-4">
          {subjects.map((s, i) => (
            <div key={i} className="col-12 col-sm-6 col-md-3">
              <div className="subject-card card text-white rounded-4 overflow-hidden">
                <img
                  src={s.img}
                  className="card-img"
                  alt={s.title}
                  style={{ height: "180px", objectFit: "cover" }}
                />
                <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center overlay">
                  <h5 className="card-title fw-bold text-uppercase">{s.title}</h5>
                  <span className="arrow-icon">➝</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="btn btn-outline-warning mt-5 px-4">
          View More Subjects
        </button>
      </div>
    </section>
  );
}
