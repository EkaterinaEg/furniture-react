import { useState, useEffect } from "react";

const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [onlyLetters, setOnlyLetters] = useState(false);
  const [onlyNumbers, setOnlyNumbers] = useState(false);
  const [valid, setValid] = useState(false);
  //   const [errors, setErrors] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "isEmpty":
          value ? setEmpty(false) : setEmpty(true);
          break;
        case "minLength":
          value.length < validations[validation]
            ? setMinLengthError(true)
            : setMinLengthError(false);
          break;
        case "isEmail":
          const re =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
          re.test(String(value).toLowerCase())
            ? setEmailError(false)
            : setEmailError(true);
          break;
        case "onlyLetters":
          const lt = /^[A-Za-z\s]*$/;
          lt.test(String(value).toLowerCase())
            ? setOnlyLetters(false)
            : setOnlyLetters(true);
          break;
        case "onlyNumbers":
          const nb = /^\d+$/;
          nb.test(Number(value)) ? setOnlyNumbers(false) : setOnlyNumbers(true);
          break;
      }
    }
  }, [value]);

  useEffect(() => {
    if (isEmpty || minLengthError || emailError) {
      setValid(false);
    } else {
      setValid(true);
    }
  }, [isEmpty, minLengthError, emailError]);

  //   errors = {
  //     firstName: <div style={{ color: "red" }}>Minimum length of 2 letters</div>,
  //     lastName: <div style={{ color: "red" }}>Minimum length of 2 letters</div>,
  //     email: <div style={{ color: "red" }}>5 symbols long</div>,
  //     phoneNumber: <div style={{ color: "red" }}>Only numbers</div>,
  //     message: <div style={{ color: "red" }}>Cannot be empty</div>,
  //   };

  return {
    isEmpty,
    minLengthError,
    emailError,
    valid,
    onlyLetters,
    onlyNumbers,
  };
};

const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue);
  const [isOut, setOut] = useState(false);
  const valid = useValidation(value, validations);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onBlur = () => {
    setOut(true);
  };

  return { value, isOut, onChange, onBlur, ...valid };
};

export { useInput, useValidation };
