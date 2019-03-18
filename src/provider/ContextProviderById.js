import React, { Component } from "react";
import PropTypes from "prop-types";
import Context from "./../provider/ContextProvider";

class ContextProviderById extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: []
    };
  }

  getUserById = id => {
    console.log(id);
  };

  render() {
    return (
      <Context.ProviderById value={{ user: this.state.user }}>
        {this.props.children}
      </Context.ProviderById>
    );
  }
}

export default ContextProviderById;
