import styles from "../carousel/carousel.module.scss";
import React from "react";

import sl1 from "../../assets/img/sl-1.png";
import sl2 from "../../assets/img/sl-2.png";
import sl3 from "../../assets/img/sl-3.png";
import sl4 from "../../assets/img/sl-4.png";
import sl5 from "../../assets/img/sl-5.png";
import sl6 from "../../assets/img/sl-6.png";
import sl7 from "../../assets/img/sl-7.png";
import sl8 from "../../assets/img/sl-8.png";

export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.,
  },
  laptop: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.,
  },

  tablet: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.,
  },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //     slidesToSlide: 1, // optional, default to 1.,
  //   },
};

export const photos = [
  {
    id: 1,
    name: "Arga Danaan",
    title: "CEO",
    img: sl1,
  },
  {
    id: 2,
    name: "Shoo Phar Dhie",
    title: "CEO",
    img: sl2,
  },
  {
    id: 3,
    name: "Shoo Phar Dhie",
    title: "CEO",
    img: sl3,
  },
  {
    id: 4,
    name: "Shoo Phar Dhie",
    title: "CEO",
    img: sl4,
  },
  {
    id: 5,
    name: "Shoo Phar Dhie",
    title: "CEO",
    img: sl5,
  },
  {
    id: 6,
    name: "Shoo Phar Dhie",
    title: "CEO",
    img: sl6,
  },
  {
    id: 7,
    name: "Shoo Phar Dhie",
    title: "CEO",
    img: sl7,
  },
  {
    id: 8,
    name: "Shoo Phar Dhie",
    title: "CEO",
    img: sl8,
  },
];

export const Photo = (props) => {
  return (
    <div
      className={`${styles.carousel__slides} d-flex flex-column align-items-center justify-content-between `}
    >
      <img
        className={`${styles.photo__img} img-fluid`}
        alt={props.photo.title}
        src={props.photo.img}
      />
      <div
        className={` ${styles.description_photo} d-flex flex-column align-items-center`}
      >
        <p className={`${styles.photo__name}`}>{props.photo.name}</p>
        <p className={`${styles.photo__title}`}>{props.photo.title}</p>
      </div>
    </div>
  );
};
