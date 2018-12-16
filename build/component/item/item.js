"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./item.sass");
var Item = function (props) {
    return (react_1["default"].createElement("div", { className: "leftmenu-item" },
        react_1["default"].createElement("div", { className: "leftmenu-item-text" }, props.name),
        react_1["default"].createElement("div", { className: "leftmenu-item-gradient" })));
};
exports["default"] = Item;
