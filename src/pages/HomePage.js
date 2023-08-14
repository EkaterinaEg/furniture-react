import { NavLink } from "react-router-dom";
import { useState } from "react";

import Promo from "../components/promoBlock/Promo";
import Divider from "../components/dividerBlock/Divider";
import Product from "../components/product/Product";
import Modal from "../components/modal/Modal";
import QuoteWindowModal from "../components/quoteWindowBlock/QuoteModal";

import homepage from "../components/homepage/homepage.module.scss";
import pageContainer from "../components/wrapper/_wrapper.module.scss";
import quoteWindowBlock from "../components/quoteWindowBlock/quoteWindow.module.scss";
import button from "../components/button/button.module.scss";

import dividerLine from "../assets/img/Line.png";
import topImage from "../assets/img/Mask group.jpg";
import Ceo from "../assets/img/CEO_photo.jpg";
import mainPageTable from "../assets/img/main_page_table.jpg";
import arrowRight from "../assets/img/arrow-right.svg";
import chairs from "../assets/img/main_page_chairs.jpg";
import materials from "../assets/img/main_page_materials.jpg";

const Home = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <>
      <main className="page__main main">
        <article className={`${homepage.home} main__home`}>
          <div className={`${pageContainer.page__container} position-relative`}>
            <div className="container">
              <div className="d-flex flex-column align-items-md-start align-items-center justify-content-around">
                <h1 className={homepage.home__title}>
                  Design your <br></br>interior with high <br></br>quality.
                </h1>
                <img
                  className={`${homepage.home__line} w-xl-683 position-absolute d-none d-xl-block`}
                  src={dividerLine}
                  alt="horizontal line"
                />
                <img className="img-fluid" src={topImage} alt="kitchen" />
              </div>
              <Promo position={"position-absolute"} />
            </div>
          </div>
        </article>
        <article className={`${homepage.about} main__about`}>
          <div className={pageContainer.page__container}>
            <div className="container">
              <Divider title={{ name: "About" }} />
              <div className="about__quote__wrapper d-flex flex-column align-items-md-start align-items-center position-relative">
                <blockquote className={homepage.about__quote}>
                  <h3>
                    "We're one of the best furniture agency. Prioritizing
                    customers and making purchases easy are the hallmarks of our
                    agency."
                  </h3>
                </blockquote>
                <figure
                  onClick={() => setModalActive(true)}
                  className={`${quoteWindowBlock.quoteWindow} description__quote-window d-flex justify-content-center p-4 m-0`}
                >
                  <img
                    className={`${quoteWindowBlock.quoteWindow__image} d-md-block d-none me-3`}
                    src={Ceo}
                    alt="CEO"
                  />
                  <figcaption className={quoteWindowBlock.quoteWindow__author}>
                    <span className={quoteWindowBlock.author__name}>
                      Arga Danaan
                    </span>
                    <br></br>CEO of Dananz
                  </figcaption>
                </figure>
                <Modal active={modalActive} setActive={setModalActive}>
                  <QuoteWindowModal />
                </Modal>
              </div>

              <div className="about__description d-flex flex-xl-row flex-column justify-content-between align-items-center text-align-sm-center gap-5 mb-5">
                <img
                  className="img-fluid description__image"
                  src={mainPageTable}
                  alt="dining table and chairs"
                />
                <div
                  className={`${homepage.decsription__text} d-flex flex-column justify-content-center align-items-center align-items-xl-start`}
                >
                  <h4 className={homepage.text__info}>
                    Online learning with us does not interfere with your daily
                    life. because learning can be done anytime and anywhere.
                  </h4>
                  <NavLink
                    className={`${button.button} ${button.button_colored} btn`}
                    to="/About"
                    role="button"
                  >
                    Learn More
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article className={`${homepage.services} main__service`}>
          <div
            className={`${pageContainer.page__container} d-flex flex-column`}
          >
            <div className="container">
              <Divider title={{ name: "Service" }} />
              <h3 className="service__title mb-5">
                Attractive furniture with the best quality.
              </h3>
              <h4 className={homepage.service__description}>
                Customize your interior design into a dream place with the best
                designers and quality furniture. We try our best to fulfill your
                expectations.
              </h4>
              <div className="wrapper position-relative">
                <ul
                  className={`${homepage.service__list} p-3 position-absolute top-0 start-0`}
                >
                  <li className="list__item mb-5 d-flex justify-content-between">
                    01{"\u00A0"}
                    {"\u00A0"}
                    {"\u00A0"}
                    {"\u00A0"}
                    Interior Design
                    <NavLink className="item__link" to="/Services">
                      <img
                        className={`${homepage.link__image}`}
                        src={arrowRight}
                        alt="arrow icon"
                      />
                    </NavLink>
                  </li>
                  <li className="list__item mb-5 d-flex justify-content-between">
                    02{"\u00A0"}
                    {"\u00A0"}
                    {"\u00A0"}
                    {"\u00A0"}Consultant
                    <NavLink className="item__link" to="/Services">
                      <img
                        className={`${homepage.link__image}`}
                        src={arrowRight}
                        alt="arrow icon"
                      />
                    </NavLink>
                  </li>
                  <li className="list__item d-flex justify-content-between">
                    03{"\u00A0"}
                    {"\u00A0"}
                    {"\u00A0"}
                    {"\u00A0"}Construction Consultant
                    <NavLink className="item__link" to="/Services">
                      <img
                        className={`${homepage.link__image}`}
                        src={arrowRight}
                        alt="arrow icon"
                      />
                    </NavLink>
                  </li>
                </ul>
                <img
                  className={`${homepage.service__image} img-fluid align-self-end`}
                  src={chairs}
                  alt="red sofa and white chairs in a living room"
                />
              </div>
            </div>
          </div>
        </article>
        <Product />
        <article className={`${homepage.material} main__material`}>
          <div className={pageContainer.page__container}>
            <div className="container">
              <div className="material__wrapper d-flex flex-column flex-md-row align-items-center">
                <div
                  className={`${homepage.material__left} d-flex flex-column`}
                >
                  <Divider title={{ name: "Material" }} />
                  <h3 className="material__title mb-4">
                    Choice of<br></br>materials for<br></br>quality furniture.
                  </h3>
                  <h4 className={`${homepage.material__description} mb-5`}>
                    You can custom the material as desired. And our furniture
                    uses the best materials and selected quality materials.
                  </h4>
                  <a className={`${button.button} btn`} href="#" role="button">
                    See Materials
                  </a>
                </div>
                <div className="material__img">
                  <img
                    className="img-fluid mt-5"
                    src={materials}
                    alt="materials for constraction"
                  />
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
};

export default Home;
