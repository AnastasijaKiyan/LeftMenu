import React, { createElement } from 'react';
import { IList } from "../../type/IList";
import datacategorys from "../../data/datacategory";
import Item from '../item/item'


const List = (props: IList): JSX.Element | null => {
    const items = props.item.map(elem =>
      createElement(Item, { ...elem, key: elem.id })
    );
    if (items.length < 1) return null;
    return (
        <section>
            <h1>
                {
                    props.category
                }
            </h1>
            <div>
                {
                    items
                }
            </div>

        </section>
    )
}

export default List;