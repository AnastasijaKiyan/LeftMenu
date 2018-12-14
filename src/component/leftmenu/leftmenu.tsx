import React, { Component } from "react";
import { ILeftMenu } from '../../type/ILeftMenu'
import Title from "../title/title";
import Section from "../section/section";

// import from "./leftmenu.sass";

class LeftMenu extends Component {
  constructor(props: ILeftMenu) {
    super(props);
  }

  render() {
    return (
      <div>
        <Title />
        <Section />
      </div>
      
    );
  }
}

export default LeftMenu;
