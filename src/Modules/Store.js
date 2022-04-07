import { createStore } from "redux";

const STATE = {
  authenticated: false,
  token: false,
};

const reducer = (state = STATE, action) => {
  var holder = { ...state };
  switch (action.type) {
    case "CORE":
      holder[action.key] = action.value;
      return holder;
    default:
      return holder;
  }
};

const store = createStore(reducer);

export default store;
