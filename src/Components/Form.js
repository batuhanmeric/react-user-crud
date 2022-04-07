import React, { Component } from "react";
import { v4 } from "uuid";

export default class extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      firstName: "",
      lastName: "",
      userName: "",
    };
  }

  onComplete = () => {
    this.props.addItem(
      this.state.firstName,
      this.state.lastName,
      this.state.userName
    );
  };
  onSave = () => {
    this.props.updateItem(
      this.state.id,
      this.state.firstName,
      this.state.lastName,
      this.state.userName
    );
  };

  componentDidMount() {
    console.log("didmount");
    if (this.props.user) {
      console.log("didmount2");
      this.setState({ id: this.props.user.id });
      this.setState({ firstName: this.props.user.firstName });
      this.setState({ lastName: this.props.user.lastName });
      this.setState({ userName: this.props.user.userName });
    }
  }
  render() {
    return (
      <>
        <div className="Modal__form__group">
          <label className="Modal__text" htmlFor="firstName">
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            value={this.state.firstName}
            onChange={(e) => {
              this.setState({ firstName: e.target.value });
            }}
            class="form-control"
          />
        </div>
        <div className="Modal__form__group">
          <label className="Modal__text" htmlFor="lastName">
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            class="form-control"
            type="text"
            value={this.state.lastName}
            onChange={(e) => {
              this.setState({ lastName: e.target.value });
            }}
          />
        </div>
        <div className="Modal__form__group">
          <label className="Modal__text" htmlFor="userName">
            User Name-{this.state.userName}
          </label>
          <input
            id="userName"
            name="userName"
            class="form-control"
            type="text"
            value={this.state.userName}
            onChange={(e) => {
              this.setState({ userName: e.target.value });
            }}
          />
        </div>
        <div className="Modal__buttons">
          {this.props.user ? (
            <button className="btn btn-warning" onClick={() => this.onSave()}>
              Güncelle
            </button>
          ) : (
            <button
              className="btn btn-success w-50"
              onClick={() => this.onComplete()}
            >
              Add
            </button>
          )}
          <button
            className="btn btn-danger ms-2 w-50"
            onClick={this.props.handleCloseModal}
          >
            Cancel
          </button>
        </div>
      </>
    );
  }
}
