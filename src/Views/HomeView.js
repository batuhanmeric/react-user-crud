import React from "react";
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";
import { NavbarComponent, FooterComponent, TableUser } from "../Components";
import { v4 as uuidv4 } from "uuid";

class Component extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      cart: [
        {
          id: 1,
          firstName: "batu",
          lastName: "meriç",
          userName: "@123",
        },
        {
          id: 2,
          firstName: "musti",
          lastName: "filiz",
          userName: "@1234",
        },
      ],
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
  }

  //Add
  addItem(name, surname, username) {
    //Yukarıda addItem ın içinde bulunan parametrelerin(name, surname, username) isimlendirmesini kafamıza göre yaptık .
    const users = [...this.state.cart];
    if ((name, surname, username)) {
      let obj = {
        id: uuidv4(),
        firstName: name,
        lastName: surname,
        userName: username,
      };
      users.push(obj);
      this.setState({ cart: users }); //users ı cart a aktardık .
      this.handleCloseModal(false);
    } else {
      alert("eksik girdiniz!");
    }
  }

  //Delete
  deleteItem(id) {
    const users = this.state.cart.filter((user) => {
      if (user.id !== id) {
        return user;
      } else {
        return null;
      }
    });
    this.setState({ cart: users });
  }

  //Updating
  updateItem(id, name, surname, username) {
    const users = this.state.cart.map((user) => {
      if (user.id === id) {
        let obj = {
          id: id,
          firstName: name,
          lastName: surname,
          userName: username,
        };
        return obj;
      } else {
        return user;
      }
    });
    this.setState({ cart: users });
    this.handleCloseModal(false);
  }

  handleOpenModal(value) {
    this.setState({ showModal: value });
  }

  handleCloseModal(value) {
    this.setState({ showModal: value });
  }

  render() {
    return (
      <div>
        <NavbarComponent />
        <main className="main">
          <TableUser
            showModal={this.state.showModal}
            cart={this.state.cart}
            handleOpenModal={this.handleOpenModal}
            handleCloseModal={this.handleCloseModal}
            addItem={this.addItem}
            deleteItem={this.deleteItem}
            updateItem={this.updateItem}
          />
        </main>
        <FooterComponent />
      </div>
    );
  }
}

function dispatcher(dispatch) {
  return {
    core: (key, value) =>
      dispatch({
        type: "CORE",
        key: key,
        value: value,
      }),
  };
}

function map(state) {
  return {
    redux: state,
  };
}

const Translated = withTranslation()(Component);
export default connect(map, dispatcher)(Translated);
