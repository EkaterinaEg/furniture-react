import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import teampage from "../components/ourTeamPage/ourteam.module.scss";
import styles from "../components/carousel/carousel.module.scss";

import Chooseus from "../components/chooseus/Chooseus";
import pageContainer from "../components/wrapper/_wrapper.module.scss";
import Divider from "../components/dividerBlock/Divider";

import teamTop from "../assets/img/Our_team_top.jpg";

import {
  responsive,
  photos,
  Photo,
} from "../components/carousel/Carousel_ourteams";

const OurTeam = () => {
  return (
    <>
      <main className="page__main main">
        <article className={`${teampage.main__team}`}>
          <div className={pageContainer.page__container}>
            <div className="container">
              <div className={`${teampage.title} col text-center team__title`}>
                <h2>Our Teams</h2>
              </div>
              <div
                className={`${teampage.subtitle} col text-center team__subtitle`}
              >
                <h4>
                  It is a long established fact that a reader will be <br />
                  distracted by the readable content of a page when <br />
                  looking at its layout.
                </h4>
              </div>
            </div>
            <div className="container">
              <img
                className="img-fluid"
                src={teamTop}
                alt="four hands on a table"
              />
            </div>
          </div>
        </article>
        <article className={`${teampage.designer} main__designer-block`}>
          <div className={pageContainer.page__container}>
            <div className="container">
              <Divider title={{ name: "Designer" }} />
              <h3 className={`${teampage.title} designer__title`}>
                Creative Person
              </h3>
              <h4 className={`${teampage.subtitle} designer__subtitle`}>
                Customize your interior design into a dream place
                <br />
                with the best designers and quality furniture. We try
                <br />
                our best to fulfill your expectations.
              </h4>
              <Carousel
                className={`${styles.carousel__slides}`}
                responsive={responsive}
                infinite={true}
                // customTransition="all .5"
                // transitionDuration={500}
                // style={{ transition: "0.5s" }}
              >
                {photos.map((photo) => (
                  <Photo photo={photo} key={photo.id} />
                ))}
              </Carousel>
            </div>
          </div>
        </article>
        <Chooseus />
      </main>
    </>
  );
};

export default OurTeam;
