import React, { Component } from "react";
import PropTypes from "prop-types";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ModalView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: this.props.modalview,
      data: [],
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
        console.log(result);
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
    return (
      <Modal className="modal-lg" isOpen={this.state.modal}>
        <ModalHeader> Modal </ModalHeader>
        <ModalBody>
          <p>{auxData.username}</p>
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

{
  /* <ContextProviderById>
            <Context.Consumer>
              {data => (
                <div>
                  <p>Apenas viendo</p>
                </div>
              )}
            </Context.Consumer>
          </ContextProviderById> */
}

{
  /* <div>
            <p>Probando aqui va la data</p>
          </div> */
}
