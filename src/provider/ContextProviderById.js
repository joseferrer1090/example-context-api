import React, { Component } from "react";
import Context from "./../config/Context";

class ProviderById extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ""
    };
  }

  getUserById = id => {
    console.log("peticion al api");
  };

  componentWillMount() {
    this.getUserById();
  }

  render() {
    return (
      <Context.Provider value={{ user: this.state.user }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default ProviderById;
