import React, { Fragment } from "react";
import Img from "../images/tab-1-pic.png";
import styled from "styled-components";
import Button from "./Button";
import { generateMedia } from "styled-media-query";

const TabContentOne = () => {
  return (
    <Fragment>
      <TabContentContainer>
        <div className="container">
          <div className="tab-content">
            <div>
              <span className="title" style={{ marginBottom: "2rem" }}>
                If you decide Netflix isnt fro you - no problem. No commitments.
                Cancel online anytime{" "}
              </span>
              <br />
              <Button style={{ marginTop: "2rem" }}>try it now</Button>
            </div>
            <img src={Img} alt="" />
          </div>
        </div>
      </TabContentContainer>
    </Fragment>
  );
};
export default TabContentOne;
// media
const customMedia = generateMedia({
  smDesktop: "1440px",
  tablet: "960px",
  mobile: "575",
});

//  styled
const TabContentContainer = styled.div`
  background: var(--main-deep-dark);
  .container {
    margin: 0 10%;
  }
  img {
    /* width: 31.875rem; */
    width: 100%;
  }
  .title {
    margin-top: 2rem;
    ${customMedia.lessThan("smDesktop")`
    font-size: 1.5rem;
    line-height: 1;
    `}
  }
  .tab-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    align-items: center;
    font-size: 2rem;
    padding: 2.5rem;
    color: #fff;
    ${customMedia.lessThan("tablet")`
      grid-template-columns: 100%;
      text-align: center;
      padding-left: 0;
      padding-right: 0;
    `}
  }
`;
