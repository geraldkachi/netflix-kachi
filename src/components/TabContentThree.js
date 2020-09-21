import React, { Fragment } from "react";
import styled from "styled-components";
import Button from "./Button";
import { Icon } from "react-icons-kit";
import { cross } from "react-icons-kit/icomoon/cross";
import { checkmark } from "react-icons-kit/icomoon/checkmark";
import { generateMedia } from "styled-media-query";

const TabContentThree = () => {
  return (
    <Fragment>
      <TabStyle>
        <div className="tab-content">
          <div className="tab-top-container">
            <span style={{ fontSize: "1.5rem" }}>
              Choose one plan and watch everything on Netflix.
            </span>
            <Button className="btn">try it now</Button>
          </div>
          {/* Tab bottom Content */}
          <div className="tab-bottom-content">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Basic</th>
                  <th>Standard</th>
                  <th>Premium</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Monthly price</td>
                  <td>$9.99</td>
                  <td>$13.99</td>
                  <td>$16.99</td>
                </tr>
                {/* HD */}
                <tr>
                  <td>HD available</td>
                  <td>
                    <Icon icon={cross} size={10} />
                  </td>
                  <td>
                    <Icon icon={checkmark} size={10} />
                  </td>
                  <td>
                    <Icon icon={checkmark} size={10} />
                  </td>
                </tr>
                {/* Ultra */}
                <tr>
                  <td>Ultra HD available</td>
                  <td>
                    <Icon icon={cross} size={10} />
                  </td>
                  <td>
                    <Icon icon={cross} size={10} />
                  </td>
                  <td>
                    <Icon icon={checkmark} size={10} />
                  </td>
                </tr>
                <tr>
                  <td>Screens you can watch on at the same time</td>
                  <td>1</td>
                  <td>2</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>Unlimited movies and TV shows</td>
                  <td>
                    <Icon icon={checkmark} size={10} />
                  </td>
                  <td>
                    <Icon icon={checkmark} size={10} />
                  </td>
                  <td>
                    <Icon icon={checkmark} size={10} />
                  </td>
                </tr>
                <tr>
                  <td>Cancel anytime</td>
                  <td>
                    <Icon icon={checkmark} size={10} />
                  </td>
                  <td>
                    <Icon icon={checkmark} size={10} />
                  </td>
                  <td>
                    <Icon icon={checkmark} size={10} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </TabStyle>
    </Fragment>
  );
};

export default TabContentThree;
const customMedia = generateMedia({
  lgDesktop: "1350px",
  mdDesktop: "1000px",
  tablet: "510px",
  mobile: "500px",
});

const TabStyle = styled.div`
  background: var(--main-deep-dark);

  .tab-content {
    margin: 0 10%;
    padding-bottom: 1%;
  }
  .tab-top-container {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    padding: 2.5rem 0 0;
    ${customMedia.lessThan("mdDesktop")`
        grid-template-columns: 1fr;
        row-gap: 0.5rem;
        text-align: center;
    `}
  }

  /*  */

  span {
    grid-column: 1 / 8;
    ${customMedia.lessThan("lgDesktop")`
       grid-column: 1 / -1;
       margin-bottom: 10%;
    `}
  }
  .btn {
    margin-left: 3rem;
    margin-right: 5.1rem;
    grid-column: 8 / 12;
    ${customMedia.lessThan("mdDesktop")`
        grid-column: 1 / -1;
        margin-left: 20%;
        margin-right: 20%;          
    `}
    ${customMedia.lessThan("tablet")`
        padding-left: 12px;
        padding-right: 12px;
        // margin-left: 1.5rem;
        // margin-right: 2.5rem;
    `}
  }
  /*  */

  /* Tab bottom Content */
  .tab-bottom-content {
    margin-bottom: 2rem auto;
    ${customMedia.lessThan("mobile")`
      overflow: auto;
    `}
  }
  /* table */
  table {
    width: 100%;
    margin-top: 2rem;
    border-collapse: collapse;
  }
  table thead th {
    text-transform: uppercase;
    padding: 0.8rem;
  }
  table tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
  }
  table tbody tr td {
    color: #999;
    padding: 0.8rem 1.2rem;
    text-align: center;
  }
  table tbody tr td:first-child {
    text-align: left;
  }
  table tbody tr:nth-child(even) {
    background: #222;
  }
`;
