import homepage from "../homepage/homepage.module.scss";
import pageContainer from "../wrapper/_wrapper.module.scss";

import Divider from "../dividerBlock/Divider";

import arrowRight from "../../assets/img/arrow-right.svg";
import { NavLink } from "react-router-dom";

const Product = () => {
  return (
    <article className={`${homepage.product} main__product`}>
      <div className={pageContainer.page__container}>
        <div className="container">
          <Divider title={{ name: "Product" }} />
          <div className="container">
            <div className="row product__themes">
              <div
                className={`${homepage.item__title} theme__item col-md-8 col-sm-6`}
              >
                <h3>
                  Choose your<br></br>product themes.
                </h3>
              </div>
              <div className="theme__item item__subtitle col-md-4 col-sm-6 px-0">
                <h4>
                  Find the theme you want. If our choice of theme is not what
                  you want, you can customize it as you want.
                </h4>
              </div>
              <div
                className={`${homepage.item__number} theme__item col-md-1 col-sm-12 text-md-start text-center mb-5`}
              >
                01
              </div>
              <div
                className={`${homepage.item__name} theme__item col-md-5 col-sm-12 mb-5 text-md-start text-center`}
              >
                <span className={homepage.item__name_text}>Vintage</span>
                <br></br>the use of simple and limited elements to get the best
                effect or impression.
              </div>
              <div className="theme__item item__icon col-md-6 col-sm-12 text-md-end text-center mb-5">
                <NavLink className="item__link" to="/Room/1">
                  <img
                    className={`${homepage.link__image}`}
                    src={arrowRight}
                    alt="arrow icon"
                  />
                </NavLink>
              </div>
              <div
                className={`${homepage.item__number} theme__item col-md-1 col-sm-12 text-md-start text-center mb-5`}
              >
                02
              </div>
              <div
                className={`${homepage.item__name} theme__item col-md-5 col-sm-12 mb-5 text-md-start text-center`}
              >
                <span className={homepage.item__name_text}>Minimalist</span>
                <br></br>the use of simple and limited elements to get the best
                effect or impression.
              </div>
              <div className="theme__item item__icon col-md-6 col-sm-12 text-md-end text-center mb-5">
                <a className="item__link" href="/Room/0">
                  <img
                    className={`${homepage.link__image}`}
                    src={arrowRight}
                    alt="arrow icon"
                  />
                </a>
              </div>
              <div
                className={`${homepage.item__number} theme__item col-md-1 col-sm-12 text-md-start text-center mb-5`}
              >
                03
              </div>
              <div
                className={`${homepage.item__name} theme__item col-md-5 col-sm-12 mb-5 text-md-start text-center`}
              >
                <span className={homepage.item__name_text}>Modern</span>
                <br></br>the use of simple and limited elements to get the best
                effect or impression.
              </div>
              <div className="theme__item item__icon col-md-6 col-sm-12 text-md-end text-center mb-5">
                <a className="item__link" href="/Room/2">
                  <img
                    className={`${homepage.link__image}`}
                    src={arrowRight}
                    alt="arrow icon"
                  />
                </a>
              </div>
              <div
                className={`${homepage.item__number} theme__item col-md-1 col-sm-12 text-md-start text-center mb-5`}
              >
                04
              </div>
              <div
                className={`${homepage.item__name} theme__item col-md-5 col-sm-12 mb-5 text-md-start text-center`}
              >
                <span className={homepage.item__name_text}>Transitional</span>
                <br></br>the use of simple and limited elements to get the best
                effect or impression.
              </div>
              <div className="theme__item item__icon col-md-6 col-sm-12 text-md-end text-center mb-5">
                <a className="item__link" href="/Room/3">
                  <img
                    className={`${homepage.link__image}`}
                    src={arrowRight}
                    alt="arrow icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Product;
