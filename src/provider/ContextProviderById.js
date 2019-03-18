import React, { Component } from "react";
import Context from "./../provider/ContextProvider";

class ProviderById extends Component {
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
      <Context.Provider>
        <div>
          <p>Probando</p>
        </div>
      </Context.Provider>
    );
  }
}

export default ProviderById;
