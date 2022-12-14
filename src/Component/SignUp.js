import { useState } from "react";
import styled from "styled-components";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

// const SignUpStyle = styled.div`
// .sign-up-wrapper {
// }
// .sign-up-body {
//   background-color: #fff;
//   position: absolute;
//   margin: auto;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   text-align: center;
//   width: 400px;
//   height: 520px;
//   border-radius: 10px;
// }
// .sign-up-form {
//   width: 235px;
//   padding: 40px;
//   margin: auto;
// }
// .sign-up-form-main div {
//   margin-bottom: 20px;
// }
// .sign-up-form-other div {
//   margin-bottom: 10px;
// }
// .sign-up-form-title {
//   font-size: 22px;
// }
// .sign-up-input {
//   font-size: 12px;
//   width: 235px;
//   height: 35px;
//   border: none;
//   border-bottom: 1px solid #000;
//   border-radius: 2px;
//   border-color: rgba(0, 0, 0, 0.243);
//   outline: none;
// }
// .sign-up button {
//   background-color: #1b2866;
//   border-radius: 3px;
//   color: #fff;
//   border: none;
//   width: 238px;
//   height: 35px;
// }
// .sign-up-form-help {
//   display: flex;
//   justify-content: space-between;

//   font-size: 11px;
//   font-weight: bold;
//   color: #1b2866cd;
// }
// `;
const SignUp = () => {
  const [isValid, setIsValid] = useState(true);
  const [touched, setTouched] = useState(false);

  //local state

  const [inputValue, setInputValue] = useState({
    name: "",
    loginId: "",
    password: "",
    phoneNum: "",
    email: "",
  });

  //function
  function onChangeName(e) {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
    // 이름은 3글자만
    if (inputValue.name.length !== 3) {
      console.log("3글자 아님");
      setIsValid(false);
    } else {
      console.log("3글자");
      setIsValid(true);
    }
  }
  function onChangeId(e) {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
    // id 8글자 이상
    if (inputValue.loginId.length < 8) {
      console.log("8글자 아래");
      setIsValid(false);
    } else {
      console.log("8글자 이상");
      setIsValid(true);
    }
  }
  function onChangePW(e) {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
    // Password 8글자 이상, 대문자 포함
    const regexPW = /[A-Z]+/;
    if (inputValue.password.length > 8 && regexPW.test(inputValue.password)) {
      console.log("8글자 이상 and 대문자 포함");
    } else {
      console.log("8글자 아래 or 대문자 미포함");
    }
  }
  function onChangePN(e) {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
    const regexPN = /^\d{3}-\d{3,4}-\d{3,4}$/;
    // id 8글자 이상
    if (regexPN.test(inputValue.phoneNum)) {
      console.log("가능");
    } else {
      console.log("불가능");
    }
  }
  function onChangeEmail(e) {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
    const regexEmail =
      /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
    setIsValid(false);
    // email
    if (regexEmail.test(inputValue.email)) {
      console.log("가능");
    } else {
      console.log("불가능");
    }
  }
  return (
    <>
      <div className="sign-up-wrapper">
        <div className="sign-up-body">
          <div className="sign-up-holder-container">
            <div className="sign-up-holder-icon">icon</div>
            <div className="sign-up-holder">
              <div className="sign-up-holder-title">Sign up now,</div>
              <div className="sign-up-holder-subtitle">Let's get started !</div>
            </div>
          </div>
          <div className="sign-up-form">
            <div className="sign-up-form-main">
              <div className="sign-up-form-title">Sign Up</div>
              <div>
                <input
                  className="sign-up-input sign-up-input-pw"
                  placeholder="NAME"
                  name="name"
                  value={inputValue.name}
                  onChange={onChangeName}
                  onBlur={() => setTouched(true)}
                />
                <FontAwesomeIcon
                  icon={faCheck}
                  className={
                    touched
                      ? isValid
                        ? "faCheck valid"
                        : "faCheck"
                      : "faCheck"
                  }
                />
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  className={
                    touched
                      ? isValid
                        ? "faCircleXmark"
                        : "faCircleXmark invalid"
                      : "faCircleXmark"
                  }
                />
              </div>
              <div>
                <input
                  className="sign-up-input sign-up-input-id"
                  placeholder="ID"
                  name="loginId"
                  value={inputValue.loginId}
                  onChange={onChangeId}
                />
                <FontAwesomeIcon icon={faCheck} className="faCheck" />
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  className="faCircleXmark"
                />
              </div>
              <div>
                <input
                  className="sign-up-input sign-up-input-pw"
                  placeholder="PASSWORD"
                  type="password"
                  name="password"
                  value={inputValue.password}
                  onChange={onChangePW}
                />
                <FontAwesomeIcon icon={faCheck} className="faCheck" />
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  className="faCircleXmark"
                />
              </div>
              <div>
                <input
                  className="sign-up-input sign-up-input-pw"
                  placeholder="PHONENUMBER        ex)000-0000-0000"
                  name="phoneNum"
                  type="number"
                  value={inputValue.phoneNum}
                  onChange={onChangePN}
                />
                <FontAwesomeIcon icon={faCheck} className="faCheck" />
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  className="faCircleXmark"
                />
              </div>
              <div>
                <input
                  className="sign-up-input sign-up-input-pw"
                  placeholder="EMAIL"
                  name="email"
                  type="email"
                  value={inputValue.email}
                  onChange={onChangeEmail}
                />
                <FontAwesomeIcon icon={faCheck} className="faCheck" />
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  className="faCircleXmark"
                />
              </div>
            </div>
            <div className="sign-up-form-other">
              <div className="sign-up">
                <button>Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
