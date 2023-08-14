import contactuspage from "../components/contactuspage/contactuspage.module.scss";

import pageContainer from "../components/wrapper/_wrapper.module.scss";
import Divider from "../components/dividerBlock/Divider";

import ContactForm from "../components/form/Form";

const Contact = () => {
  return (
    <>
      <main className="page__main main">
        <article className={`${contactuspage.main__contactus}`}>
          <div className={pageContainer.page__container}>
            <div className="container">
              <div
                className={`${contactuspage.title} col text-center team__title`}
              >
                <h2>Contact Us</h2>
              </div>
              <div
                className={`${contactuspage.subtitle} col text-center team__subtitle`}
              >
                <h4>
                  It is a long established fact that a reader will be <br />
                  distracted by the readable content of a page when <br />
                  looking at its layout.
                </h4>
              </div>
            </div>
          </div>
        </article>
        <ContactForm />
        <article className={`${contactuspage.location} main__location`}>
          <div className={pageContainer.page__container}>
            <div className="container">
              <Divider title={{ Location }} />
              <div className="d-flex">
                <div className={`${contactuspage.location__contacts} col-4`}>
                  <div className="row-3">
                    <h3 className="location__title title mb-4">
                      Visit Our Stores
                    </h3>
                    <p className="location__subtitle mb-5">
                      Find us at these locations
                    </p>
                    <span className="location__contact location__contact_email">
                      Email
                    </span>
                    <h4 className="mt-4 mb-5">dananz@gmail.com</h4>
                    <span className="location__contact location__contact_phone">
                      Phone
                    </span>
                    <h4 className="mt-4">+62 815 002 1000</h4>
                  </div>
                </div>
                <div className="location__cities location__cities_left col-4">
                  <div className="row d-flex flex-column gap-5">
                    <span className={`${contactuspage.cities} cities_top`}>
                      Jakarta
                    </span>
                    <h4>
                      Customize your interior design into a dream place with the
                      best designers and quality furniture. We try our best to
                      fulfill your expectations.
                    </h4>
                    <span className={`${contactuspage.cities} cities_bottom`}>
                      Yogyakarta
                    </span>
                    <h4>
                      Customize your interior design into a dream place with the
                      best designers and quality furniture. We try our best to
                      fulfill your expectations.
                    </h4>
                  </div>
                </div>
                <div className="location__cities location__cities_right col-4 ms-5">
                  <div className="row d-flex flex-column gap-5">
                    <span className={`${contactuspage.cities} cities_top`}>
                      Jakarta
                    </span>
                    <h4>
                      Customize your interior design into a dream place with the
                      best designers and quality furniture. We try our best to
                      fulfill your expectations.
                    </h4>
                    <span className={`${contactuspage.cities} cities_bottom`}>
                      Yogyakarta
                    </span>
                    <h4>
                      Customize your interior design into a dream place with the
                      best designers and quality furniture. We try our best to
                      fulfill your expectations.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
};

export default Contact;
