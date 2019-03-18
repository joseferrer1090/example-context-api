import React, { Component } from "react";
import PropTypes from "prop-types";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ModalView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: this.props.modalview,
      id: this.props.id
    };
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  render() {
    return (
      <Modal isOpen={this.state.modal}>
        <ModalHeader> Modal </ModalHeader>
        <ModalBody>
          <div>
            <p>Probando apenas</p>
          </div>
        </ModalBody>
        <ModalFooter>
          <button
            type="button"
            className="btn btn-secondary-outline"
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
  id: PropTypes.number.isRequired
};

export default ModalView;
