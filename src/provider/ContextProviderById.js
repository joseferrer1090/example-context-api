import React, { Component } from "react";
import Context from "./../config/Context";

class ProviderById extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      id: this.props.id
    };
  }

  getDataUser = id => {
    fetch("https://jsonplaceholder.typicode.com/users/" + id)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          user: data
        });
      })
      .catch(error => console.log(error));
  };
  componentWillMount() {
    console.log("esta es la peticion");
    this.getDataUser(this.state.id);
  }

  render() {
    return (
      <Context.Provider value={{ user: this.state.user, id: this.state.id }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default ProviderById;
