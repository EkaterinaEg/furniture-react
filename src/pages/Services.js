import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import servicespage from "../components/servicespage/servicespage.module.scss";
import styles from "../components/carousel/carousel.module.scss";

import Product from "../components/product/Product";

import pageContainer from "../components/wrapper/_wrapper.module.scss";
import Divider from "../components/dividerBlock/Divider";

import chairs from "../assets/img/main_page_chairs.jpg";

import {
  responsive,
  Slide,
  achievementSliderData,
} from "../components/carousel/Carousel_achievments";

const Services = () => {
  return (
    <>
      <main className="page__main main">
        <article className={`${servicespage.main__servicesBlock}`}>
          <div className={pageContainer.page__container}>
            <div className="container">
              <div
                className={`${servicespage.title} col text-center serviceBlock__title`}
              >
                <h2>Services</h2>
              </div>
              <div
                className={`${servicespage.subtitle} col text-center serviceBlock__subtitle`}
              >
                <h4>
                  It is a long established fact that a reader will be <br />
                  distracted by the readable content of a page when <br />
                  looking at its layout.
                </h4>
              </div>
            </div>
            <div className="container">
              <img className="img-fluid w-100" src={chairs} alt="living room" />
            </div>
          </div>
        </article>
        <article
          className={`${servicespage.achievement} main__achievement-block`}
        >
          <div className={pageContainer.page__container}>
            <div className="container">
              <Divider title={{ name: "Achievment" }} />
              <Carousel
                className={`${styles.achievment__slider}`}
                responsive={responsive}
                infinite={true}
                showDots={true}
              >
                {achievementSliderData.map((slide) => (
                  <Slide slide={slide} key={slide.id} />
                ))}
              </Carousel>
              {/* <div
                id="carouselExampleCaptions"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={interior}
                      className="d-block w-100"
                      alt="an office room"
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h3>Interior design</h3>
                      <p>
                        Customize your interior design into a dream place with
                        the best designers and quality furniture. We try our
                        best to fulfill your expectations.
                      </p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      src={consultant}
                      className="d-block w-100"
                      alt="2 women in the meeting"
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h3>Consultant</h3>
                      <p>
                        Customize your interior design into a dream place with
                        the best designers and quality furniture. We try our
                        best to fulfill your expectations.
                      </p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      src={construction}
                      className="d-block w-100"
                      alt="a meeting in an office"
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h3>construction consultant</h3>
                      <p>
                        Customize your interior design into a dream place with
                        the best designers and quality furniture. We try our
                        best to fulfill your expectations.
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div> */}
            </div>
          </div>
        </article>
        <Product />
      </main>
    </>
  );
};

export default Services;
