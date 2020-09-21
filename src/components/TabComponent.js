import React, { Component, Fragment } from "react";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TabDoor from "./tabs_nav/TabDoor";
import TabDevice from "./tabs_nav/TabDevice";
import TabPrice from "./tabs_nav/TabPrice";
import styled from "styled-components";
// Tab Content
import TabContentOne from "./TabContentOne";
import TabContentTwo from "./TabContentTwo";
import TabContentThree from "./TabContentThree";

class TabComponent extends Component {
  state = {
    tabIndex: 0,
  };
  render() {
    return (
      <Fragment>
        <StyledTabComponent>
          <Tabs
            className="tabs"
            selectedIndex={this.state.tabIndex}
            onSelect={(tabIndex) => this.setState({ tabIndex })}
          >
            <TabList className="tablist">
              <Tab
                className={`${
                  this.state.tabIndex === 0 ? "tab-selected active" : null
                }`}
              >
                <TabDoor />
                <p className="lgScreen" style={{ marginBottom: "1.875rem" }}>
                  <strong>
                    No Commitments
                    <br />
                    Cancel online at anytime
                  </strong>
                </p>
                <br />
                <span style={{ marginTop: "0.4rem" }} className="mdScreen">
                  Cancel
                </span>
              </Tab>
              <Tab
                className={`${
                  this.state.tabIndex === 1 ? "tab-selected active" : null
                }`}
              >
                <TabDevice />
                <p className="lgScreen" style={{ marginTop: "-5.3125rem" }}>
                  <strong>Watch anywhere</strong>
                </p>
                <br />
                <span style={{ marginTop: "-5.3125rem" }} className="mdScreen">
                  Devices
                </span>
              </Tab>
              <Tab
                className={`${
                  this.state.tabIndex === 2 ? "tab-selected active" : null
                }`}
              >
                <TabPrice />
                <p className="lgScreen">
                  <strong>Pick your price</strong>
                </p>
                <br />
                <span className="mdScreen">Price</span>
              </Tab>
            </TabList>
            {/* Tabs Contents */}

            {/* panl One  */}
            <TabPanel>
              <TabContentOne />
            </TabPanel>

            {/* Panel Two */}
            <TabPanel>
              <TabContentTwo />
            </TabPanel>
            {/* Panel Three */}
            <TabPanel>
              <TabContentThree />
            </TabPanel>
          </Tabs>
        </StyledTabComponent>
      </Fragment>
    );
  }
}

export default TabComponent;

const StyledTabComponent = styled.div`
  background: var(--main-deep-dark);
  .tabs {
    padding-top: 1rem;
  }
  .tablist {
    display: grid;
    justify-content: center;
    align-content: center;
    text-align: center;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    color: var(--main-grey);
    margin: 0 12%;
    list-style: none;
  }

  ul li:hover {
    color: #fff;
    cursor: pointer;
  }
  ul li:hover svg path {
    fill: #fff;
  }
  /* The active tab */
  .active {
    border-bottom: 4px solid var(--main-red);
  }
  .tab-select {
    color: #fff;
  }
  .tab-selected svg path {
    fill: white;
  }
  @media (min-width: 900px) {
    .mdScreen {
      display: none;
    }
  }
  @media (max-width: 900px) {
    .lgScreen {
      display: none;
      /* font-size: bolder; */
    }
    .mdScreen {
      display: block;
      margin-bottom: 0.4rem;
    }
  }
`;
