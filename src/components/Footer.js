import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { iosWorld } from "react-icons-kit/ionicons/iosWorld";
import { arrowSortedDown } from "react-icons-kit/typicons/arrowSortedDown/";
import { generateMedia } from "styled-media-query";

class Footer extends Component {
  state = {
    langContent: false,
  };
  handleToggle = (e) => {
    e.preventDefault();
    this.setState({
      langContent: !this.state.langContent,
    });
  };
  render() {
    return (
      <FooterContainer>
        <span className="question">
          Question? Contact Us&nbsp;&nbsp;
          <div className="call">
            <Link>Call +234 903 927 8115</Link>&nbsp;&nbsp;
          </div>
        </span>
        <div className="footer-column">
          {/* FAQ */}
          <ul>
            <li>
              <Link>FAQ</Link>
            </li>
            <li>
              <Link>Investor Relation</Link>
            </li>
            <li>
              <Link>Ways to Watch</Link>
            </li>
            <li>
              <Link>Corporate Information</Link>
            </li>
            <li>
              <Link>Netflix Originals</Link>
            </li>
          </ul>
          {/* HELP CENTER */}
          <ul>
            <li>
              <Link>Help Center</Link>
            </li>
            <li>
              <Link>Jobs</Link>
            </li>
            <li>
              <Link>Terms of Use</Link>
            </li>
            <li>
              <Link>Contact Us</Link>
            </li>
            {/* <li>
              <Link></Link>
            </li> */}
          </ul>
          {/* Accounts */}
          <ul>
            <li>
              <Link>Account</Link>
            </li>
            <li>
              <Link>Redeem Gift Cards</Link>
            </li>
            <li>
              <Link>Privacy</Link>
            </li>
            <li>
              <Link>Speed Test</Link>
            </li>
            {/* <li>
              <Link>Netflix Originals</Link>
            </li> */}
          </ul>
          {/* Media Center */}
          <ul>
            <li>
              <Link>Media Center</Link>
            </li>
            <li>
              <Link>Buy Gift Cards</Link>
            </li>
            <li>
              <Link>Cookie Preferences</Link>
            </li>
            <li>
              <Link>Legal Notices</Link>
            </li>
            {/* <li>
              <Link>Netflix Originals</Link>
            </li> */}
          </ul>
          {/* Language Button */}
          <div className="lang-btn" onClick={this.handleToggle}>
            <Icon icon={iosWorld} size={20} />
            &nbsp; &nbsp;English &nbsp; &nbsp;
            <Icon icon={arrowSortedDown} />
          </div>
        </div>
        {/* Tggle Language */}
        {this.state.langContent && (
          <div className="lang-toggle">
            <ul>
              <li>English</li>
            </ul>
            <ul>
              <li>Franch</li>
            </ul>
          </div>
        )}
        <div
          style={{
            marginLeft: "15%",
            fontSize: "0.9rem",
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        >
          Netflix Nigeria
        </div>
      </FooterContainer>
    );
  }
}

export default Footer;

const customMedia = generateMedia({
  tablet: "740px",
  mobile: "375px",
});

const FooterContainer = styled.div`
  background: var(--main-deep-dark);
  padding-top: 10rem;
  padding-bottom: 3rem;
  color: #999;

  .footer-column {
    width: 70%;
    margin: 1rem auto 0;
    font-size: 0.9rem;
    overflow: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    ${customMedia.lessThan("tablet")`
          grid-template-columns: repeat(2, 1fr);
          width: 90%;
        //  text-align: center
    `}
    ${customMedia.lessThan("mobile")`
        grid-template-columns: repeat(2, 1fr);
        width: 90%;
        margin-left: 7%;
        margin-right: 7%;
        //  text-align: center;
    `}
  }

  span {
    margin-left: 10%;
    font-size: 1.125rem;
  }
  .call {
    @media (min-width: 175px) {
      /* font-size: 0.12rem; */
      display: inline-block;
    }
  }
  .call {
    @media (max-width: 575px) {
      /* font-size: 0.12rem; */
      margin-left: 10%;
      padding-top: 10px;
    }
  }

  ul li {
    list-style: none;
    line-height: 2.5rem;
    /* margin-bottom: 7%; */
  }
  a {
    text-decoration: none;
    cursor: pointer;
  }
  /* Language Button */

  .lang-btn {
    background: transparent;
    border: 0.9px solid #333;
    padding: 0.8rem;
    width: 9rem;
    cursor: pointer;
    margin: 2rem 0 0;
    &:hover {
      background: rgba(255, 255, 255, 0.1);
      color: #fff;
    }
    /* display: grid;
    grid-template-columns: repeat(3, 1fr); */
  }

  /* toggle lang */
  .lang-toggle {
    margin-left: 15%;
    position: absolute;
    z-index: 1;
  }
  .lang-toggle ul {
    background: var(--main-deep-#333);
    width: 9rem;
    border: 1px solid #333;
    text-align: center;
    &:hover {
      background: #0085ff;
      color: #fff;
    }
  }
`;
