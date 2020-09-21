import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { generateMedia } from "styled-media-query";
import FBlogo from "../../images/fb-logo.png";

const regexp = RegExp(
  /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
);

const initState = {
  cheched: true,
  email: "",
  password: "",
  emailError: "",
  passwordError: "",
};

export default class LoginForm extends Component {
  state = initState;

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  //   validate
  validate = () => {
    let inputError = false;
    const errors = {
      emailError: "",
      passwordError: "",
    };
    if (!this.state.email) {
      inputError = true;
      errors.emailError = "Please entera valid email";
    } else if (!this.state.email.match(regexp)) {
      inputError = true;
      errors.emailError = (
        <span style={{ red: "red" }}>Your email address must be valid</span>
      );
    }
    if (this.state.password.lenght < 4) {
      inputError = true;
      errors.passwordError =
        "Your password must contain between 4 annd 60 charaters";
    }
    this.setState({
      ...errors,
    });
    return inputError;
  };

  onSumbit = (e) => {
    e.preventDefault();
    const err = this.validate();
    if (!err) {
      this.setState(initState);
    }
  };
  //   check Box
  handleCheckbox = (e) => {
    this.setState({
      checked: e.target.checked,
    });
  };

  render() {
    return (
      <Fragment>
        <FormContainer>
          <div className="form-container">
            <form action="">
              <h1>Sign In</h1>
              <div className="input-container">
                <input
                  className={
                    this.state.emailError
                      ? "input-error input-empty"
                      : "input-empty"
                  }
                  //   className="input-empty"
                  onChange={this.handleEmailChange}
                  type="email"
                  required
                  value={this.state.email}
                />
                <label>Email or Phone Number </label>
                <span style={{ color: "#db7302" }}>
                  {this.handlePasswordChange}
                </span>
              </div>
              <div className="input-container">
                <input
                  className={
                    this.state.passwordError
                      ? "input-error input-empty"
                      : "input-empty"
                  }
                  //   className="input-empty"
                  onChange={this.handlePasswordChange}
                  type="password"
                  required
                  value={this.state.password}
                />
                <label>Password</label>
                <span style={{ color: "#db7302" }}>
                  {this.state.passwordError}
                </span>
              </div>
              <div className="input-container">
                <Button onClick={(e) => this.onSumbit(e)} type="submit">
                  Sign In
                </Button>
              </div>
              <label className="checkbox-container">
                remember me
                <input
                  type="checkbox"
                  defaultChecked={this.state.checked}
                  onChange={this.handleCheckbox}
                />
                <span className="checkmark"></span>
              </label>
              <Link to="/" className="need-help">
                Need Help
              </Link>
              <div className="bottom-form">
                <img src={FBlogo} alt="fb" />
                <Link to="/" className="login-fb-text">
                  Login with Facebook
                </Link>
                <br />
                <br />
                <span style={{ color: "#999" }}>New to Netflix ?</span>&nbsp;
                <Link to="/" className="sign-in-text">
                  Sign up now
                </Link>
              </div>
            </form>
          </div>
        </FormContainer>
      </Fragment>
    );
  }
}
// media
const customMedia = generateMedia({
  tablet: "640px",
  mobile: "400px",
});

const FormContainer = styled.div`
  display: grid;
  justify-content: center;
  position: relative;
  z-index: 5;
  ${customMedia.lessThan("tablet")`
    border-bttom: 0.9px solid #999;
    overflow: hidden;
  `}

  .form-container {
    background: rgba(0, 0, 0, 0.5);
    position: relative;
    width: 28.125rem;
    height: 41.25rem;
    margin-top: -120px;
    padding: 4rem;
    ${customMedia.lessThan("table")`
    padding: 0.6rem;
    height: 35rem;
    margin-top: 120px;
    `}
    ${customMedia.lessThan("mobile")`
    margin-top: .7rem;
    `}
  }
  .input-container {
    display: grid;
    grid-template-columns: 1fr;
    margin-top: 1.2rem;
  }
  .input-empty {
    color: #fff;
    border: 0;
    background: #333;
    border-radius: 0.25rem;
    height: 3rem;
    padding: 0.9rem 1.25rem 0;
  }
  form div label {
    position: absolute;
    top: 0.625rem;
    left: 1.25rem;
    pointer-events: none;
    color: #8a8a8a;
    font-size: 1rem;
    transition: transform 150ms ease-out, font-size 150ms ease-out;
  }
  #root > div > div > div.sc-fznyAO.doSqvJ {
    margin: 0;
  }

  form div {
    position: relative;
  }
  input:focus ~ label {
    top: 0.4375rem;
    font-size: 0.7rem;
  }

  input:focus {
    outline: none;

    .input-error {
      border-bottom: 1px solid #db7301;
    }
  }
  /* chechbox */

  .checkbox-container {
    margin-left: 0.75rem;
    padding-left: 1.875rem;
    position: relative;
    font-size: 0.9rem;
    color: #999;
    cursor: pointer;
  }
  .checkbox-container input {
    display: none;
  }
  .checkbox-container .checkmark {
    display: inline-block;
    background: #454545;
    width: 1.1rem;
    height: 1.1rem;
    left: 0;
    top: 0;
    border-radius: 0.1rem;
    position: absolute;
  }
  .check-container input:checked + .checkedmark:after {
    content: "";
    position: absolute;
    height: 0.25rem;
    width: 0.625rem;
    border-left: 2px solid #000;
    border-bottom: 2px solid #000;
    top: 25%;
    left: 21%;
    transform: rotate(-45deg);
  }
  .need-help {
    text-decoration: none;
    color: #828282;
    margin-left: 6.6rem;
    font-size: 0.9rem;
    ${customMedia.lessThan("table")`
   margin-left: 13rem;
    `}
  }
  /* bottom form */
  .bottom-form img {
    width: 1.5625rem;
    margin: 0.625rem 0.625rem -0.4375rem 0;
  }
  .login-fb-text {
    color: #828282;
    font-size: 0.9rem;
  }
  .bottom-form {
    position: absolute;
    margin-bottom: 4rem;
    bottom: 0;
  }

  .sign-up-text {
    font-size: 1.1rem;
    color: #fff;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Button = styled.button`
  color: #fff;
  background: rgb(229, 9, 20);
  border: none;
  outline: none;
  padding: 0.8rem 1.3rem;
  border-radius: 0.125rem;
  font-size: 1rem;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.45);
  transition: opacity 0.2s ease-in;
  cursor: pointer;
  margin: 1rem 0;
`;
