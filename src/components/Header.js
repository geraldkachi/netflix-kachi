import React, { Component, Fragment } from "react";
import logo from "../svg/logo.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { ic_keyboard_arrow_right } from "react-icons-kit/md/ic_keyboard_arrow_right";
import Button from "./Button";
import { generateMedia } from "styled-media-query";

class Header extends Component {
  render() {
    return (
      <Fragment>
        <HeaderComponent className="header-container">
          <div className="header-top">
            <Link to="/">
              <Logo src={logo} alt="img" />
            </Link>
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                color: "white",
                fontweight: "Bold",
              }}
              className="sign-in-btn"
            >
              Sign In
            </Link>
          </div>

          {/* Header Content */}
          <div className="header-content">
            <Title>Unlimited movies,</Title>
            <SubTitle>TV shows, and more.</SubTitle>
            <form
              class="cta-form email-form"
              data-uia="email-form"
              method="GET"
            >
              <h3 style={{ color: "#fff" }} class="email-form-title">
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>
              <div class="get-started-form">
                {/* <label class="input_id" placeholder="email">
                  <input
                    style={{
                      padding: "10px 10px",
                      textAlign: "left",
                      marighLeft: "300px",
                    }}
                    type="email"
                    data-uia="field-email"
                    name="email"
                    class="nfTextField"
                    id="id_email_hero_fuji"
                    value=""
                    tabindex="0"
                    placeholder="Email address"
                    autocomplete="email"
                    maxlength="50"
                    minlength="5"
                    dir=""
                  />
                </label> */}

                <Button
                  primary
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontweight: "Bold",
                  }}
                  className="getstarted-btn"
                >
                  get started
                  <Icon
                    className="Icon"
                    icon={ic_keyboard_arrow_right}
                    size={37}
                  />
                </Button>
              </div>
            </form>

            <h2 class="our-story-subtitle" data-uia="our-story-card-subtitle">
              Watch anywhere. Cancel anytime.
            </h2>
          </div>
        </HeaderComponent>
      </Fragment>
    );
  }
}
export default Header;

const customMedia = generateMedia({
  lgDesktop: "1350px",
  mdDesktop: "1150px",
  tablet: "960px",
  mobile: "740px",
});

// Logo
const Logo = styled.img`
  width: 9rem;
  height: 3.5rem;
  position: absolute;
  top: 30%;
  left: 100px;
  transform: translate(-50%, -50%);
  margin-left: 13px;
  ${customMedia.lessThan("tablet")`
  left: 20%;
  top: 25%;
  `}
  ${customMedia.lessThan("mobile")`
  left: 23%;
  top: 22%;
  width: 8rem;
  `}
`;

//  Header Container

const HeaderComponent = styled.div`
  .sign-in-btn {
    right: 0;
    margin: 1.125rem 3% 0;
    padding: 0.4375rem 1.0625rem;
    font-weight: 400;
    line-height: normal;
    border-radius: 0.1875rem;
    font-size: 1rem;
    background: var(--main-red);
    position: absolute;
    translate: transform;
    cursor: pointer;
    transition: background 0.2s ease-in;
    &:hover {
      background: var(main-red-hover);
    }
    ${customMedia.lessThan("mobile")`
    margin-top: 1.25rem;
    right: 5%;
    `}
  }
  /* Header Top */
  .header-top {
    position: relative;
    height: 10rem;
    z-index: 2;
  }
  /* Header Content */
  .header-content {
    width: 80%;
    position: relative;
    margin: 2.5rem auto 0;
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    z-index: 1;
    color: #fff;
    /* ${customMedia.lessThan("mobile")`
        display: grid;    
        grid-temlate-rows: repeat(3, 60%); 
        margin: 8rem;
    `} */
  }
  /* Get Started Btn */
  /* .getstarted-btn {
    display: inline-block;
    background: var(--main-red);
    text-transform: uppercase;
    border: none;
    outline: none;
    margin: 15px 20%;
    padding: 1rem;
    border-radius: 0.1875rem;
    font-size: 2rem;
    text-align: center;
   vertical-align: middle; 
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.45);
    transition: background 0.2s ease-in;
    cursor: pointer;
    z-index: 1; 
    &:hover {
      background: #d30913;
    }
  } */

  .Icon svg {
    vertical-align: middle !important;
    margin-left: 1rem;
    ${customMedia.lessThan("mobile")`
        display: none;     
    `}
  }
  .our-story-subtitle {
    font-weight: 400;
    font-size: 1.625rem;
  }
  .nfTextField {
    height: 60px;
    width: 200%;
  }

  @media (max-width: 551px) {
    /* .header-top {
      height: 20px;
    } */
    /* .header-content {
      bottom: 200;
      width: 100%;
      font-size: 5px;
    } */
    /* .getstarted-btn {
      padding: 0.2rem 0.6rem;
      border-radius: 0.1875rem;
      font-size: 1.1rem;
      font-weight: 7rem;
      margin: 3px;
    } */
  }
  .getstarted-btn {
    ${customMedia.lessThan("lgDesktop")`
    margin: 0 33%;
    font-size: 1.5rem;
    `}
    ${customMedia.lessThan("mdDesktop")`
    margin: 0 25%;
    font-size: 1.5rem;
    `}
    ${customMedia.lessThan("mdDesktop")`
    margin: 10px 5%;
    padding: 0.8rem 0.7rem;
    font-size: 1.3rem;
    `}
  }
`;
const Title = styled.h1`
  margin: 0 0 1.2rem;
  font-size: 4rem;
  font-weight: 700;
  /* line-height: 1.1em; */
  line-height: 1em;
  ${customMedia.lessThan("tablet")`
   font-size: 2.6rem;
  `}
`;
const SubTitle = styled.h1`
  font-weight: 700;
  /* font-size: 1.875rem; */
  font-size: 3.125rem;
  /* line-height: 1.25em; */
  line-height: 1em;
  margin: 0 0 1.875rem;
  /* text-transform: uppercase; */
  ${customMedia.lessThan("mobile")`
      font-size: 1.4rem;
      margin: 0;
  `}
`;

//  styled-componets learn freestyled

/* <ThemeProvider theme={theme}> */

//  <Button>center</Button>
//             <H1>STyled Components</H1>
//         </ThemeProvider>

// const theme = {
//   primary: "teal",
//   secondary: "green",
//   font: "sans-serif",
// };

// const Button = styled.button`
//   /* font-family: sans-serif; */
//   font-family: ${(props) => props.theme.font};
//   font-size: 1.3rem;
//   border: none;
//   border-radius: 5px;
//   padding: 7px 10px;
//   /* background: ${(props) => (props.primary ? "red" : "green")}; */
//   background: ${(props) => props.theme.primary};
//   color: #fff;
//   &:hover {
//     background: blue;
//     border: 2px solid ridge;
//     border-radius: 5px;
//     color: blue;
//   }
// `;

// const H1 = styled.h1`
//   /* font-size: 3rem; */
//   font-size: ${(props) => props.theme.font};
// `;
// import styled, { ThemeProvider } from "styled-components";
