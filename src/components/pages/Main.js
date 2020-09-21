import React, { Component, Fragment } from "react";
import Header from "../Header";
import TabComponent from "../TabComponent";
import Footer from "../Footer";
class Main extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <TabComponent />
        <Footer />
      </Fragment>
    );
  }
}

export default Main;
