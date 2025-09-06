// CommunityExperts.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./CommunityExperts.css";

import { Navigation } from "swiper/modules";

const experts = [
  {
    name: "Mr. Urela",
    image: "https://www.fashionbeans.com/wp-content/uploads/2022/02/paolo-bendandi-D-8XODEIr_s-unsplash-380x300.jpg ",
    text: "The automated process all your website tasks."
  },
  {
    name: "Mr. Uttom",
    image: "https://media.istockphoto.com/id/520646742/photo/smiling-womans-portrait.jpg?s=612x612&w=0&k=20&c=XWAaCoij2_OWgT0gkQK9e6pMIfgWo9uovySn-7K-E6Q=",
    text: "The automated process all your website tasks."
  },
  {
    name: "Mr. Shakil",
    image: "https://thumbs.dreamstime.com/b/front-view-business-man-suit-black-tie-self-confident-businessman-concept-professionalism-success-37637669.jpg",
    text: "The automated process all your website tasks."
  },
  {
    name: "Mr. Arafat",
    image: "https://png.pngtree.com/png-clipart/20240629/original/pngtree-front-view-of-a-smiling-business-woman-png-image_15447180.png",
    text: "The automated process all your website tasks."
  },
  {
    name: "Mr. John",
    image: "https://www.fashionbeans.com/wp-content/uploads/2022/02/paolo-bendandi-D-8XODEIr_s-unsplash-380x300.jpg ",
    text: "The automated process all your website tasks."
  },
  {
    name: "Mr. Alex",
    image: "https://png.pngtree.com/png-clipart/20240629/original/pngtree-front-view-of-a-smiling-business-woman-png-image_15447180.png",
    text: "The automated process all your website tasks."
  },
];

const CommunityExperts = () => {
  return (
    <div className="experts-section">
      <h2 className="title">Community experts</h2>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="experts-swiper"
      >
        {experts.map((expert, index) => (
          <SwiperSlide key={index}>
            <div className="expert-card">
              <img src={expert.image} alt={expert.name} className="expert-img" />
              <h3>{expert.name}</h3>
              <p>{expert.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CommunityExperts;