import aboutpage from "../components/aboutpage/aboutpage.module.scss";

import Promo from "../components/promoBlock/Promo";
import Divider from "../components/dividerBlock/Divider";
import Chooseus from "../components/chooseus/Chooseus";

import pageContainer from "../components/wrapper/_wrapper.module.scss";

import abouttop from "../assets/img/About_main group.jpg";
import achievment from "../assets/img/About_achievments.jpg";

const About = () => {
  return (
    <>
      <main className="page__main main">
        <article className={`${aboutpage.about_about} main__about`}>
          <div className={pageContainer.page__container}>
            <div className="container">
              <div
                className={`${aboutpage.title} col text-center about-block__title`}
              >
                <h2>About</h2>
              </div>
              <div
                className={`${aboutpage.subtitle} col text-center about-block__subtitle`}
              >
                <h4>
                  It is a long established fact that a reader will be distracted
                  by
                  <br />
                  the readable content of a page when looking at its layout.
                </h4>
              </div>
            </div>
            <div className="container">
              <img
                className="img-fluid"
                src={abouttop}
                alt="meeting in an office"
              />
            </div>
          </div>
        </article>
        <article className={`${aboutpage.achievement} main__achievement-block`}>
          <div className={pageContainer.page__container}>
            <div className="container">
              <Divider title={{ name: "Achievment" }} />
              <h3 className={aboutpage.achievement__title}>
                interior customization with Danaanz,
                <br />
                best quality with professional workers
              </h3>
              <div className="d-flex justify-content-between">
                <img
                  className="img-fluid achievement__img text-center"
                  src={achievment}
                  alt="dining table with sea view through the window"
                />
                <Promo position={"position-static"} />
              </div>
            </div>
          </div>
        </article>
        <Chooseus />
      </main>
    </>
  );
};

export default About;
