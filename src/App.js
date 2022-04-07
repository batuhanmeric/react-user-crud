import React from "react";
import { Navigator, Store } from "./Modules";
import { Recources } from "./Helpers";
import { Provider } from "react-redux";
import { Helmet } from "react-helmet";

class App extends React.PureComponent {
  render() {
    return (
      <Provider store={Store}>
        <Navigator />
        <Helmet>
          <title>{Recources.title}</title>
          <meta name="description" content={Recources.description} />
        </Helmet>
      </Provider>
    );
  }
}

export default App;
