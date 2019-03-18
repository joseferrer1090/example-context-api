import React, { Component } from "react";
import PropType from "prop-types";
import IMG from "./../assets/img/descarga.svg";
import ModalView from "./ModalView";

class CardUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  openModal = () => {
    this.refs.child.toggle();
  };

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
                          this.openModal();
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
              <p className="card-text" style={{ fontSize: "16px" }}>
                <small className="text-muted">Nombre:</small> {this.props.name}
              </p>
              <p className="card-text" style={{ fontSize: "16px" }}>
                <small className="text-muted">Email:</small> {this.props.email}
              </p>
              <p className="card-text" style={{ fontSize: "16px" }}>
                <small className="text-muted">Telefono:</small>{" "}
                {this.props.phone}
              </p>
            </div>
          </div>
        </div>
        <ModalView modalview={this.state.modal} ref={"child"} />
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
