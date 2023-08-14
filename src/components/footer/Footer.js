import { useState } from "react";

import Modal from "../modal/Modal";
import Subscription from "../subscription/subscription";

import styles from "./footer.module.scss";
import pageContainer from "../wrapper/_wrapper.module.scss";

import logo from "../../assets/img/logo.png";
import arrowRight from "../../assets/img/arrow-right.svg";

const Footer = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <footer className="page__footer">
      <div className={pageContainer.page__container}>
        <div className="container">
          <div className="row">
            <div className="col-7">
              <img src={logo} alt="Logo" />
              <h3>
                One of the best furniture
                <br />
                agency.
              </h3>
            </div>
            <div className="footer__form col-5 align-items-center justify-content-center d-flex">
              <div className="row d-flex ">
                <div className="col-10 mb-3">
                  <p className={`${styles.subscription__text}`}>
                    Enter your email to get the laterst news
                  </p>
                </div>
                <div className="col-2">
                  <button
                    className={`${styles.subscription__button}`}
                    onClick={() => setModalActive(true)}
                  >
                    <img
                      className={`${styles.form__image}`}
                      src={arrowRight}
                      alt="arrow icon"
                    />
                  </button>
                </div>
              </div>
            </div>

            <Modal active={modalActive} setActive={setModalActive}>
              <Subscription />
            </Modal>
          </div>
          <div
            className={`${styles.footer__social} col offset-8 d-flex flex-column me-5`}
          >
            <div className="social__title col mb-4">Follow us On</div>
            <div className="col social__list gap-5 d-flex justify-content-start">
              <a
                className={`${styles.social__list__link}`}
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-facebook text-dark mx-1"></i>
              </a>
              <a
                className={`${styles.social__list__link}`}
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-instagram text-dark mx-1"></i>
              </a>
              <a
                className={`${styles.social__list__link}`}
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi-tiktok text-dark mx-1 w-24 h-24"></i>
              </a>
              <a
                className={`${styles.social__list__link}`}
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-youtube text-dark mx-1"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
