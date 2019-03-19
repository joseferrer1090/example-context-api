import React, { Component } from "react";
import Context from "./../config/Context";

class ContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  grabDataFromApi = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          users: data
        });
      })
      .catch(error => console.warn(error));
  };

  componentDidMount() {
    this.grabDataFromApi();
  }

  render() {
    return (
      <Context.Provider value={{ users: this.state.users }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default ContextProvider;
