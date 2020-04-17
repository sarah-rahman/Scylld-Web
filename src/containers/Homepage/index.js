import React from "react";
import NavBar from "../../components/NavBar";
import Introduction from "../../components/Introduction";

export default class Homepage extends React.Component {
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
    const { width } = this.state;

    return (
      <div>
        <NavBar />
        <Introduction />
      </div>
    );
  }
}
