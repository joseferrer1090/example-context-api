import React, { Component } from "react";
import PropType from "prop-types";
import IMG from "./../assets/img/descarga.svg";

class CardUser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="">
          <div className="card mb-4 box-shadow">
            <img className="card-img-top" src={IMG} alt="Card image cap" />
            <div className="card-body">
              <div>
                {" "}
                <h4 className="card-title text-center">
                  {" "}
                  {this.props.username}{" "}
                  <span className="text-center mt-0">
                    {" "}
                    <small style={{ fontSize: "12px" }}>
                      {" "}
                      <a
                        href=""
                        onClick={e => {
                          e.preventDefault();
                          alert("Probando");
                        }}
                        style={{ cursor: "pointer !important", color: "blue" }}
                      >
                        {" "}
                        ver mas
                      </a>{" "}
                    </small>
                  </span>
                </h4>
              </div>
              <p class="card-text" style={{ fontSize: "16px" }}>
                <small class="text-muted">Nombre:</small> {this.props.name}
              </p>
              <p class="card-text" style={{ fontSize: "16px" }}>
                <small class="text-muted">Email:</small> {this.props.email}
              </p>
              <p class="card-text" style={{ fontSize: "16px" }}>
                <small class="text-muted">Telefono:</small> {this.props.phone}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CardUser.propType = {
  name: PropType.string.isRequired,
  username: PropType.string.isRequired,
  eamil: PropType.string.isRequired,
  phone: PropType.string.isRequired
};

export default CardUser;
