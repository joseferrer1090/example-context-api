import React, { Component } from "react";
import Context from "./config/Context"; // Este es mi contexto
import ContextProvider from "./provider/ContextProvider"; // Este es mi provedor de datos "Provider"
import User from "./component/CardUser"; // Esta es la tarjeta que se rendizara
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Context-API
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Inicio <span className="sr-only">(current)</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <br />
        <main className="main">
          <div className="album py-5 bg-light">
            <div className="container">
              <div className="row">
                <ContextProvider>
                  {/* En esta linea llamo a mi provedor de datos el cual tiene una petion a un api */}
                  <Context.Consumer>
                    {data => (
                      <div className="row">
                        {data.users.map((aux, i) => {
                          return (
                            <div key={i} className="col-md-4">
                              <User
                                name={aux.name}
                                username={aux.username}
                                email={aux.email}
                                phone={aux.phone}
                              />
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </Context.Consumer>
                </ContextProvider>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
