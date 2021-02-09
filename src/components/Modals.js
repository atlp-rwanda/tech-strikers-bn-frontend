import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";

class Modals extends Component {
  render() {
    const { onShow, onClose, children } = this.props;
    return (
      <>
        <Modal
          show={onShow}
          className="modal"
          onHide={onClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton />
          <Modal.Body>{children}</Modal.Body>
        </Modal>
      </>
    );
  }
}

export default Modals;
