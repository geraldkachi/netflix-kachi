import React, { Fragment } from "react";
import styled from "styled-components";
import Button from "./Button";
import ImgTv from "../images/tab-tv.png";
import ImgTablet from "../images/tab-tablet.png";
import ImgMacbook from "../images/tab-macbook.png";
import { generateMedia } from "styled-media-query";

const TabContentTwo = () => {
  return (
    <Fragment>
      <TabContentTwoStyled>
        <div className="tab-content">
          <div className="top-tab-content">
            <span style={{ fontSize: "1.5rem" }}>
              Watch Tv shows and movies anytime, anywhere - personalized for
              you.
            </span>
            <Button className="btn">try it now</Button>
          </div>
          {/* Tab Bottom Content */}
          <div className="tab-bottom-content">
            {/* Tv Image Container */}
            <div>
              <img src={ImgTv} styles={{ width: "18.75rem" }} alt="" />
              <h3>Watch on your TV</h3>
              <p>
                Smart TVs, PLayStation, Xbox, Chromecast Apple TV, Blu ray,
                players and more.
              </p>
            </div>
            {/* Tablet Image Container */}
            <div>
              <img
                src={ImgTablet}
                styles={{ width: "18.75rem", paddingTop: "0.625rem" }}
                alt=""
              />
              <h3>Watch on your TV</h3>
              <p>
                Smart TVs, PLayStation, Xbox, Chromecast Apple TV, Blu ray,
                players and more.
              </p>
            </div>
            {/* MacBook Image Container */}
            <div>
              <img
                src={ImgMacbook}
                styles={{
                  width: "18.75rem",
                  paddingTop: "0.625rem",
                  paddingBottom: "0.625rem",
                }}
                alt=""
              />
              <h3>Watch on your TV</h3>
              <p>
                Smart TVs, PLayStation, Xbox, Chromecast Apple TV, Blu ray,
                players and more.
              </p>
            </div>
          </div>
        </div>
      </TabContentTwoStyled>
    </Fragment>
  );
};

export default TabContentTwo;

// media
const customMedia = generateMedia({
  smDestop: "1440px",
  tablet: "740px",
  mobile: "450px",
});

const TabContentTwoStyled = styled.div`
  background: var(--main-deep-dark);

  .tab-content {
    margin: 0 15%;
    color: #fff;
  }

  /* Tab-Top-Content */
  .top-tab-content {
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(12, 1fr);
    padding: 2.5rem 0;
    /* margin-left: 50px; */
    ${customMedia.lessThan("tablet")`
    grid-template-columns: repeat(2, 1fr);
    `}
    ${customMedia.lessThan("tablet")`
    grid-template-columns:  1fr;
    text-align: center;
    row-gap: 1.5rem;
    `}
  }
  span {
    grid-column: 1 / 8;
    padding-left: 12px;
    padding-right: 12px;
    ${customMedia.lessThan("tablet")`
     grid-column: 1 / -1;
     font-size: 1.5rem;
    `}
  }
  .btn {
    margin: 0 1.25rem 1.25rem;
    grid-column: 10 / 12;
    ${customMedia.lessThan("tablet")`
     grid-column: 1 / -1;
     margin-left: 30%;
     margin-right: 30%;
    `}
    ${customMedia.lessThan("mobile")`
     padding-left: 20px;
     padding-right: 20px;
    `}
  }
  img {
    width: 100%;
  }
  h3 {
    margin: 0.5rem 0;
  }
  /*  Tab Bottom Content */
  .tab-bottom-content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    text-align: center;
    margin-top: 2rem;
    /* width: 0 15%; */
    ${customMedia.lessThan("tablet")`
     grid-template-columns: 1fr;
    `}
  }
`;
