import React from "react";
import { IItem } from "../../type/IItem";
import { store } from '../../reducer/reducer'
import { IState } from "../../type/IState";

//import "./item.sass";

interface IProps {
  categoryId: number
}

export default class Item extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  render(): JSX.Element {
    let allItems: IItem[] = store.getState().items;
    let filteredItems: IItem[] = allItems.filter((i) => i.field == this.props.categoryId);

    return (
      <div>
        {
          filteredItems.map(
            (item): JSX.Element => {
              return (
                <div className="leftmenu-item">
                  <div className="leftmenu-item-text">{item.name}</div>
                  <div className="leftmenu-item-gradient">|||||||</div>
                </div>
              )
            }
          )
        }
      </div>
    );
  }
}