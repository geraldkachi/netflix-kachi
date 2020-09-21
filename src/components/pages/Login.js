import React, { Component, Fragment } from "react";
import logo from "../../svg/logo.svg";
import styled from "styled-components";
import { generateMedia } from "styled-media-query";
import LoginForm from "../login/LoginForm";
import LoginFooter from "../login/LoginFooter";

class Login extends Component {
  render() {
    return (
      <Fragment>
        <LoginStyle>
          <div className="main-login-container">
            <div className="header-top">
              <Logo src={logo} className="logo" alt="" />
            </div>
            <LoginForm />
            <LoginFooter />
          </div>
        </LoginStyle>
      </Fragment>
    );
  }
}
export default Login;

const customMedia = generateMedia({
  tablet: "640px",
  lgTablet: "740px",
});

const LoginStyle = styled.div`
  .main-login-container {
    /* margin-bottom: 200rem; */
    /* height: 100vh; */
    /* position: relative; */
    /* background: radial-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)),
    url(../../images/bg.jpg) no-repeat center center/cover; */
  }

  /*
  .main-login-container::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    box-shadow: inset 70px 50px 190px #000, inset -70px -50px -190px;
  } */

  .header-top {
    position: relative;
    /* height: 10rem; */
    padding-top: 10rem;
    z-index: 1;
  }
`;
const Logo = styled.img`
  width: 11rem;
  position: absolute;
  z-index: 10;
  top: 25%;
  left: 11%;
  transform: translate(-50%, -50%);
  margin-left: 0;
  ${customMedia.lessThan("tablet")`
  width: 11rem;
    top: 45%;
    left: 50%;
  `}
`;
