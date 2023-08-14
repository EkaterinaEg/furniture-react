import pageContainer from "../wrapper/_wrapper.module.scss";
import styles from "./contactUs.module.scss";
import button from "../button/button.module.scss";

const ContactUs = () => {
  return (
    <article className={`${styles.contact} main__contact`}>
      <div className={pageContainer.page__container}>
        <div className="container">
          <div className="row">
            <div className="col-7">
              <h3 className={styles.contact__motto}>
                let's discuss making your interior like a dream place!
              </h3>
            </div>
            <div className="col-5">
              <div className={`${styles.contact__text} col-12 mb-5`}>
                <h4>
                  Contact us below to work together to build your amazing
                  interior
                </h4>
              </div>
              <div className="col-12">
                <a
                  className={`${button.button} btn contact__button`}
                  href="#"
                  role="button"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ContactUs;
