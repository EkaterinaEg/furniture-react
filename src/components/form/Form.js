import { useInput } from "../../utils/UseValidation";

import button from "../button/button.module.scss";
import styles from "./form.module.scss";

const ContactForm = () => {
  const firstName = useInput("", {
    isEmpty: true,
    minLength: 2,
    onlyLetters: true,
  });
  const lastName = useInput("", {
    isEmpty: true,
    minLength: 2,
    onlyLetters: true,
  });
  const email = useInput("", { isEmpty: true, minLength: 5, isEmail: true });

  const phoneNumber = useInput("", {
    isEmpty: true,
    minLength: 5,
    onlyNumbers: true,
  });
  const message = useInput("", {
    isEmpty: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      method="post"
      onSubmit={handleSubmit}
      className={`${styles.form}  main__form`}
    >
      <div className="{pageContainer.page__container}">
        <div className="container">
          {/* {firstName.isOut && firstName.isEmpty && (
            <div style={{ color: "red" }}>First Name cannot be empty</div>
          )} */}
          {firstName.isOut && firstName.minLengthError && (
            <div style={{ color: "red" }}>
              {" "}
              Minimum length of First Name is 2 letters
            </div>
          )}
          {firstName.isOut && firstName.onlyLetters && (
            <div style={{ color: "red" }}>Only letters in First Name</div>
          )}
          {lastName.isOut && lastName.minLengthError && (
            <div style={{ color: "red" }}>
              {" "}
              Minimum length of Last Name is 2 letters
            </div>
          )}
          {lastName.isOut && lastName.onlyLetters && (
            <div style={{ color: "red" }}>Only letters in Last Name</div>
          )}

          {email.isOut && email.emailError && (
            <div style={{ color: "red" }}>Invalid symbol or invalid email</div>
          )}
          {email.isOut && email.minLengthError && (
            <div style={{ color: "red" }}>
              At least 5 symbols long (incl. @) for email
            </div>
          )}
          {phoneNumber.isOut && phoneNumber.minLengthError && (
            <div style={{ color: "red" }}>
              At least 5 symbols long for phone
            </div>
          )}
          {phoneNumber.isOut && phoneNumber.onlyNumbers && (
            <div style={{ color: "red" }}>
              Only numbers for phone without spaces
            </div>
          )}
          {message.isOut && message.isEmpty && (
            <div style={{ color: "red" }}>Message cannot be empty</div>
          )}
          <div className="row justify-content-center">
            <div className="col-6 d-flex flex-column mb-4">
              <label
                htmlFor="firstName"
                className={`${styles.form__label} form-label mb-2`}
              >
                First Name
              </label>

              <input
                type="text"
                id="firstName"
                name="firstName"
                className={`${styles.form__input} form-conrol p-3`}
                required
                placeholder="First Name"
                value={firstName.value}
                onChange={(e) => firstName.onChange(e)}
                onBlur={(e) => firstName.onBlur(e)}
              />
            </div>
            <div className="col-6 d-flex flex-column mb-4">
              <label
                htmlFor="lastName"
                className={`${styles.form__label} form-label mb-2`}
              >
                {" "}
                Last Name
              </label>

              <input
                type="text"
                id="lastName"
                name="lastName"
                className={`${styles.form__input} form-conrol p-3`}
                placeholder="Last Name"
                value={lastName.value}
                onChange={(e) => lastName.onChange(e)}
                onBlur={(e) => lastName.onBlur(e)}
                // onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div className="col-12 d-flex flex-column mb-4">
              <label
                htmlFor="email"
                className={`${styles.form__label} form-label mb-2`}
              >
                Email
              </label>{" "}
              <input
                type="email"
                id="email"
                name="email"
                className={`${styles.form__input} form-conrol p-3`}
                placeholder="Email"
                value={email.value}
                onChange={(e) => email.onChange(e)}
                onBlur={(e) => email.onBlur(e)}
                // onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="col-12 d-flex flex-column mb-4">
            <label
              htmlFor="phoneNumber"
              className={`${styles.form__label} form-label mb-2`}
            >
              Phone Number{" "}
            </label>{" "}
            <div className="d-flex">
              <select
                id="phoneNumber"
                className={`${styles.form__select} p-3`}
                // value={selectedCountry}

                // onChange={(e) => setSelectedCountry(e.target.value)}
              >
                <option value="us">US</option>
                <option value="ca">CA</option>
                <option value="ca">Other</option>
              </select>
              <input
                type="tel"
                id="phoneNumber"
                className={`${styles.form__input} form-conrol w-100 p-3`}
                name="phoneNumber"
                placeholder="Phone Number"
                value={phoneNumber.value}
                onChange={(e) => phoneNumber.onChange(e)}
                onBlur={(e) => phoneNumber.onBlur(e)}

                // onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          </div>
          <div className="col-12 mb-4 d-flex flex-column mb-4">
            <label
              htmlFor="message"
              className={`${styles.form__label} form-label mb-2`}
            >
              Message{" "}
            </label>

            <textarea
              name="message"
              id="message"
              className={`${styles.form__textarea} p-3`}
              placeholder="Your Message"
              value={message.value}
              onChange={(e) => message.onChange(e)}
              onBlur={(e) => message.onBlur(e)}
              rows={5}
              cols={40}
            />
          </div>
          <button
            type="sumbit"
            disabled={
              !email.valid ||
              !firstName.valid ||
              !lastName.valid ||
              !phoneNumber.valid ||
              !message.valid
            }
            className={`${button.button} ${button.button_colored} btn`}
          >
            Send
          </button>
        </div>
      </div>
    </form>
  );
};

// const ContactForm = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [selectedCountry, setSelectedCountry] = useState("US");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };
//   return (
//     <form
//       method="post"
//       onSubmit={handleSubmit}
//       className={`${styles.form}  main__form`}
//     >
//       <div className="{pageContainer.page__container}">
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-6 d-flex flex-column mb-4">
//               <label
//                 htmlFor="firstName"
//                 className={`${styles.form__label} form-label mb-2`}
//               >
//                 First Name
//               </label>

//               <input
//                 type="text"
//                 id="firstName"
//                 className={`${styles.form__input} form-conrol p-3`}
//                 placeholder="First Name"
//                 value={firstName}
//                 onChange={(e) => setFirstName(e.target.value)}
//               />
//             </div>
//             <div className="col-6 d-flex flex-column mb-4">
//               <label
//                 htmlFor="lastName"
//                 className={`${styles.form__label} form-label mb-2`}
//               >
//                 {" "}
//                 Last Name
//               </label>

//               <input
//                 type="text"
//                 id="lastName"
//                 className={`${styles.form__input} form-conrol p-3`}
//                 placeholder="Last Name"
//                 value={lastName}
//                 onChange={(e) => setLastName(e.target.value)}
//               />
//             </div>

//             <div className="col-12 d-flex flex-column mb-4">
//               <label
//                 htmlFor="email"
//                 className={`${styles.form__label} form-label mb-2`}
//               >
//                 Email
//               </label>{" "}
//               <input
//                 type="text"
//                 id="email"
//                 className={`${styles.form__input} form-conrol p-3`}
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             <div className="col-12 d-flex flex-column mb-4">
//               <label
//                 htmlFor="phoneNumber"
//                 className={`${styles.form__label} form-label mb-2`}
//               >
//                 Phone Number{" "}
//               </label>{" "}
//               <div className="d-flex">
//                 <select
//                   className={`${styles.form__select} p-3`}
//                   value={selectedCountry}
//                   onChange={(e) => setSelectedCountry(e.target.value)}
//                 >
//                   <option value="us">US</option>
//                   <option value="ca">CA</option>
//                 </select>
//                 <input
//                   type="text"
//                   id="phoneNumber"
//                   className={`${styles.form__input} form-conrol w-100 p-3`}
//                   placeholder="Phone Number"
//                   value={phoneNumber}
//                   onChange={(e) => setPhoneNumber(e.target.value)}
//                 />
//               </div>
//             </div>
//             <div className="col-12 mb-4 d-flex flex-column mb-4">
//               <label
//                 htmlFor="message"
//                 className={`${styles.form__label} form-label mb-2`}
//               >
//                 Message{" "}
//               </label>

//               <textarea
//                 name="message"
//                 id="message"
//                 className={`${styles.form__textarea} p-3`}
//                 placeholder="Your Message"
//                 rows={5}
//                 cols={40}
//               />
//             </div>
//             <button
//               type="sumbit"
//               className={`${button.button} ${button.button_colored} btn`}
//             >
//               Send
//             </button>
//           </div>
//         </div>
//       </div>
//     </form>
//   );
// };

export default ContactForm;
