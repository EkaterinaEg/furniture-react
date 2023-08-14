import chooseus from "./chooseus.module.scss";

import pageContainer from "../wrapper/_wrapper.module.scss";

import Divider from "../dividerBlock/Divider";
import Card from "../card/Card";

const Chooseus = () => {
  return (
    <article className={`${chooseus.service} main__service`}>
      <div className={pageContainer.page__container}>
        <div className="container">
          <Divider title={{ name: "Service" }} />
          <h3 className="service__title mb-5">Why Choose Us</h3>
          <h4 className={chooseus.service__description}>
            Customize your interior design into a dream place with the best
            designers and quality furniture. We try our best to fulfill your
            expectations.
          </h4>
          <div className="container">
            <div className="row">
              <div className="col-4">
                <Card title={{ name: "High Quality" }} />
              </div>
              <div className="col-4">
                <Card title={{ name: "Professional Designer" }} />
              </div>
              <div className="col-4">
                <Card title={{ name: "The Best Services" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Chooseus;
