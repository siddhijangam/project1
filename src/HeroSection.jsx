import React from "react";

export default function HeroSection() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Image */}
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ-D0n2Hg9XLyC4dyjGrz7onDD4AkhWBkqhw&s"
            alt="Person with headphones"
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-800 leading-snug">
            Take the next step toward your <br /> personal and professional{" "}
            <br /> goals with us.
          </h1>
          <p className="text-gray-600 text-base">
            The automated process all your website tasks. Discover tools and
            techniques to engage effectively with vulnerable children and young
            people.
          </p>
          <button className="px-6 py-3 bg-orange-400 hover:bg-orange-500 text-white font-semibold rounded-lg shadow-md transition">
            Join Now For Free
          </button>
        </div>
      </div>
    </div>
  );
}