import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { HomeView } from "../Views";

class Component extends React.PureComponent {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomeView} />
        </Switch>
      </Router>
    );
  }
}

export default Component;
