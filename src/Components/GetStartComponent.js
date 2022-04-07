import React from "react";
import { withTranslation } from "react-i18next";

class Component extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { t } = this.props;

    return (
      <div class="get-start">
        <p>
          $ git clone https://github.com/mustafafiliz/react-starter-kit.git{" "}
          <br /> $ npm i <br /> $ npm run start
        </p>
      </div>
    );
  }
}

export default withTranslation()(Component);
