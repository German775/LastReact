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
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.css");
var React = require("react");
var ReactDOM = require("react-dom");
var modalRoot = document.getElementById('modal-root');
var Modal = /** @class */ (function (_super) {
    __extends(Modal, _super);
    function Modal(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            elementModal: document.createElement('div')
        };
        return _this;
    }
    Modal.prototype.componentDidMount = function () {
        modalRoot.appendChild(this.state.elementModal);
    };
    Modal.prototype.componentWillUnmount = function () {
        modalRoot.removeChild(this.state.elementModal);
    };
    Modal.prototype.render = function () {
        return ReactDOM.createPortal(this.props.children, this.state.elementModal);
    };
    return Modal;
}(React.Component));
exports.Modal = Modal;
//# sourceMappingURL=Modal.js.map