import intDesImg from "../../assets/img/service_interior_design.jpg";
import ConstrImg from "../../assets/img/service_construction.jpg";
import ConsultImg from "../../assets/img/service_consultant.jpg";

import styles from "../carousel/carousel.module.scss";
import React from "react";

export const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export const achievementSliderData = [
  {
    id: 1,
    title: "Interior design",
    text: "Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.",
    image: intDesImg,
  },
  {
    id: 2,
    title: "Consultant",
    text: "Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.",
    image: ConsultImg,
  },
  {
    id: 3,
    title: "Construction consultant",
    text: "Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.",
    image: ConstrImg,
  },
];

export const Slide = (props) => {
  return (
    <div
      className={`${styles.carousel__slides} d-flex flex-column align-items-center justify-content-center`}
    >
      <img
        className={`${styles.slides__img} img-fluid`}
        alt={props.slide.title}
        src={props.slide.image}
      />
      <div className={`${styles.slides__description}`}>
        <h3 className={`${styles.description__title}`}>{props.slide.title}</h3>
        <p className={`${styles.description__text}`}>{props.slide.text}</p>
      </div>
    </div>
  );
};
