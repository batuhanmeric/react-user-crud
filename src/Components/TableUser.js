import React, { Component } from "react";
import { Table } from "reactstrap";
import ModalUser from "./ModalUser";

export default class TableUser extends Component {
  state = {
    editUser: {},
  };

  Edit(z) {
    this.props.handleOpenModal(true);
    console.log(z);
    this.setState({ editUser: z });
  }
  Add() {
    this.props.handleOpenModal(true);
    this.setState({ editUser: null });
  }
  render() {
    return (
      <div className="container d-flex flex-column justify-content-center align-items-center ">
        <Table className="my-5">
          <thead>
            <tr>
              <th>#ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((z) => (
              <tr>
                <th scope="row">{z.id}</th>
                <td>{z.firstName}</td>
                <td>{z.lastName}</td>
                <td>{z.userName}</td>
                <td>
                  <button
                    className="btn btn-success "
                    onClick={() => this.Edit(z)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger ms-2"
                    onClick={() => this.props.deleteItem(z.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <button onClick={() => this.Add()} className="btn btn-secondary w-25">
          add
        </button>
        {this.props.showModal === true ? (
          <ModalUser
            user={this.state.editUser}
            showModal={this.props.showModal}
            handleOpenModal={this.props.handleOpenModal}
            handleCloseModal={this.props.handleCloseModal}
            addItem={this.props.addItem}
            updateItem={this.props.updateItem}
          />
        ) : null}
      </div>
    );
  }
}
