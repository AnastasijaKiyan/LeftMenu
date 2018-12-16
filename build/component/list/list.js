"use strict";
exports.__esModule = true;
var react_1 = require("react");
// import Item from '../item/item'
var List = function (props) {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", null,
            "Lists ....",
            react_1["default"].createElement("br", null),
            props.categoryId)));
    /*
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
    )*/
};
exports["default"] = List;
