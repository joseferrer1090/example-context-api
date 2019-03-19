import React, { Component } from "react";
import PropTypes from "prop-types";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ModalView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: this.props.modalview,
      data: "",
      id: this.props.iduser
    };
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  getDataUserById = id => {
    fetch("https://jsonplaceholder.typicode.com/users/" + id)
      .then(response => response.json())
      .then(result => {
        // console.log(result);
        this.setState({
          data: result
        });
      })
      .catch(err => {
        console.log("Error", err);
      });
  };

  componentDidMount() {
    const id = this.state.id;
    this.getDataUserById(id);
  }

  render() {
    // console.log(this.state.id);
    const auxData = this.state.data;
    console.log(auxData.address);
    return (
      <Modal className="modal-lg" isOpen={this.state.modal}>
        <ModalHeader> Modal </ModalHeader>
        <ModalBody>
          <div className="row">
            <div className="col-md-3">
              <img
                src="https://via.placeholder.com/150"
                className="img-thumbnail"
              />
            </div>
            <div className="col-md-9">
              <table className="table table-hover table-striped">
                <tbody>
                  <tr>
                    <td>Identificacion</td>
                    <td>{auxData.id}</td>
                  </tr>
                  <tr>
                    <td>Nombre</td>
                    <td>{auxData.name}</td>
                  </tr>
                  <tr>
                    <td>username</td>
                    <td>{auxData.username}</td>
                  </tr>
                  <tr>
                    <td>email</td>
                    <td>{auxData.email}</td>
                  </tr>
                  <tr>
                    <td>Direccion</td>
                    <td>Datos de la direccion</td>
                  </tr>
                  <tr>
                    <td>Telefono</td>
                    <td>{auxData.phone}</td>
                  </tr>
                  <tr>
                    <td>website</td>
                    <td>
                      <a href={`http://${auxData.website}/`} target={"_blank"}>
                        {auxData.website}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Empresa</td>
                    <td>Datos de la empresa</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <button
            type="button"
            className="btn btn-outline-secondary btn-sm"
            onClick={() => {
              this.setState({
                modal: false
              });
            }}
          >
            Cerrar{" "}
          </button>
        </ModalFooter>
      </Modal>
    );
  }
}

ModalView.propTypes = {
  modalview: PropTypes.bool.isRequired,
  iduser: PropTypes.number.isRequired
};

export default ModalView;
