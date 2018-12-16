"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var react_1 = require("react");
require("./category.sass");
var list_1 = require("../list/list");
var Category = /** @class */ (function (_super) {
    __extends(Category, _super);
    function Category(props) {
        return _super.call(this, props) || this;
    }
    Category.prototype.press = function (id, e) {
        console.log(id);
        console.log(e);
        debugger;
    };
    Category.prototype.render = function () {
        var _this = this;
        return (react_1["default"].createElement("section", { className: "category", onClick: function (e) { return _this.press(_this.props.id, e); } },
            react_1["default"].createElement("h1", { className: "title" }, this.props.name),
            react_1["default"].createElement(list_1["default"], { key: this.props.id, categoryId: this.props.id })));
    };
    return Category;
}(react_1["default"].Component));
/*
const Category = (props: IProps): JSX.Element | null => {
    function press(e) {

    }

    return (
        <section className="category">
            <h1 className="title">
                {props.name}
            </h1>
            <List
                key={props.id}
                categoryId={props.id}
            />
        </section>
    )
}
*/
//const Category = (props): JSX.Element => (<p className="leftmenu-section-category">{props.name} </p>)
exports["default"] = Category;
