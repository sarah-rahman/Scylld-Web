import React from "react";
import Homepage from "./containers/Homepage/index";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }

  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    // Check Layout if it is mobile, tablet, or desktop
    // const { width } = this.state;
    // const isMobile = width <= 600;
    // const isTablet = width > 600 && width < 960;
    // const isDesktop = width >= 960;

    return <Homepage />;
  }
}

export default App;
