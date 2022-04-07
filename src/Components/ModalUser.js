import React, { Component } from "react";
import ReactModal from "react-modal";
import Modal from "react-modal";
import Form from "./Form";

Modal.setAppElement("#root");

export default class ModalUser extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <ReactModal
        isOpen={this.props.showModal}
        contentLabel="onRequestClose Example"
        onRequestClose={this.props.handleCloseModal}
        className="Modal"
        overlayClassName="Overlay"
      >
        <p className="Modal__title">{this.props.user ? "Düzenle" : "Yeni"} </p>
        <Form
          addItem={this.props.addItem}
          updateItem={this.props.updateItem}
          user={this.props.user}
          handleCloseModal={this.props.handleCloseModal}
        />
      </ReactModal>
    );
  }
}
