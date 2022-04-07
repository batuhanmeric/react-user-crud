import React from "react";
import { withTranslation } from "react-i18next";

class Component extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { t } = this.props;

    return <footer className="footer">Footer Component</footer>;
  }
}

export default withTranslation()(Component);
