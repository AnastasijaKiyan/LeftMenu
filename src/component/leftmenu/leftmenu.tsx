import React, { Component } from "react";
import { ILeftMenu } from '../../type/ILeftMenu';
import Title from "../title/title";
import Section from "../section/section";

import "./leftmenu.sass";

class LeftMenu extends Component {
  constructor(props: ILeftMenu) {
    super(props);
  }

  render() {
    return (
      <div className="leftmenu-main">
        <Title />
        <Section />
      </div>
    );
  }
}

export default LeftMenu;
