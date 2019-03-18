import React, { Component } from "react";
import PropTypes from "prop-types";
import ContextbyId from "./../config/Context";
import ContextProviderById from "./../provider/ContextProviderById";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ModalView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: this.props.modalview
    };
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  render() {
    return (
      <Modal className="modal-lg" isOpen={this.state.modal}>
        <ModalHeader> Modal </ModalHeader>
        <ModalBody>
          <ContextProviderById>
            <ContextbyId.Consumer>
              <div>{data => <div>probando </div>}</div>
            </ContextbyId.Consumer>
          </ContextProviderById>
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
  modalview: PropTypes.bool.isRequired
};

export default ModalView;
