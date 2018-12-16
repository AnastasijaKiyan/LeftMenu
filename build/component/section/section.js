"use strict";
exports.__esModule = true;
var react_1 = require("react");
var datacategory_1 = require("../../data/datacategory");
var category_1 = require("../category/category");
var Section = function () {
    return (react_1["default"].createElement("section", null,
        datacategory_1["default"].map(function (category) {
            return (react_1["default"].createElement(category_1["default"], { key: category.id, name: category.name, id: category.id }));
        }),
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("br", null),
            "Selected category:")));
};
exports["default"] = Section;
