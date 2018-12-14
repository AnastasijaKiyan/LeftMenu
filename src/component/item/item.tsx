import React from "react";
import { IItem } from "../../type/IItem";

import "./item.sass";

const Item = (props: IItem): JSX.Element => {
  return (
    <div className="leftmenu-item">
      <div className="leftmenu-item-text">{props.name}</div>
      <div className="leftmenu-item-gradient" />
    </div>
  );
};

export default Item;
