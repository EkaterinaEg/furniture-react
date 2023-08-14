import { useInput } from "../../utils/UseValidation";

import styles from "./subscription.module.scss";
import button from "../button/button.module.scss";

const Subscription = () => {
  const email = useInput("", { isEmpty: true, minLength: 5, isEmail: true });

  return (
    <div className="footer__form col-12 align-content-center mt-5">
      {email.isOut && email.emailError && (
        <div style={{ color: "red" }}>Invalid symbol or invalid email</div>
      )}
      {email.isOut && email.minLengthError && (
        <div style={{ color: "red" }}>
          At least 5 symbols long (incl. @) for email
        </div>
      )}
      <div className="col-12 mb-3">
        <label
          htmlFor="footer__subscription"
          className={`${styles.email_label} form-label mb-4`}
        >
          Enter your email to get the laterst news
        </label>
        <div className="col-12 input-group mt-2">
          <input
            type="email"
            name="email"
            className={`${styles.input_email} form-control`}
            id="footer__subscription"
            placeholder="Email Address"
            onChange={(e) => email.onChange(e)}
            onBlur={(e) => email.onBlur(e)}
          />
        </div>
        <button className={` ${button.button_colored} ${button.button} btn`}>
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscription;
