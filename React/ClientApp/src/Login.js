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
var react_router_dom_1 = require("react-router-dom");
var React = require("react");
var react_router_1 = require("react-router");
var Registration = /** @class */ (function (_super) {
    __extends(Registration, _super);
    function Registration(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            loggedIn: false
        };
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }
    Registration.prototype.handleSubmit = function () {
        sessionStorage.setItem("token", "123");
        this.setState({
            loggedIn: true
        });
    };
    Registration.prototype.render = function () {
        if (this.state.loggedIn === false) {
            return (React.createElement("div", { className: "modal", role: "dialog" },
                React.createElement("div", { className: "modal-dialog", role: "document" },
                    React.createElement("div", { className: "modal-content" },
                        React.createElement("div", { className: "modal-header" },
                            React.createElement("h3", { className: "modal-title" }, "Registration page")),
                        React.createElement("div", { className: "modal-body" },
                            React.createElement("label", { className: "inputEmail3" }, "Email addres"),
                            React.createElement("input", { className: "form-control", type: "email", name: "name", placeholder: "Enter email" }),
                            React.createElement("label", { className: "inputPassword3" }, "Password"),
                            React.createElement("input", { className: "form-control", type: "password", name: "password", placeholder: "Enter password" }),
                            React.createElement("label", { className: "inputPassword3" }, "Reenter password"),
                            React.createElement("input", { className: "form-control", type: "password", name: "reiterationPassword", placeholder: "Enter password" })),
                        React.createElement("div", { className: "modal-footer" },
                            React.createElement("input", { className: "btn btn-lg btn-primary btn-block", type: "submit", value: "Send", onClick: this.handleSubmit }))))));
        }
        else {
            return React.createElement(react_router_1.Redirect, { to: "item1" });
        }
    };
    return Registration;
}(React.Component));
exports.Registration = Registration;
var Login = /** @class */ (function (_super) {
    __extends(Login, _super);
    function Login(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            loggedIn: false
        };
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }
    Login.prototype.handleSubmit = function () {
        sessionStorage.setItem("token", "123");
        this.setState({
            loggedIn: true
        });
    };
    Login.prototype.render = function () {
        if (this.state.loggedIn === false) {
            return (React.createElement("div", { className: "modal", role: "dialog" },
                React.createElement("div", { className: "modal-dialog", role: "document" },
                    React.createElement("div", { className: "modal-content" },
                        React.createElement("div", { className: "modal-header" },
                            React.createElement("h3", { className: "modal-title" }, "Login page")),
                        React.createElement("div", { className: "modal-body" },
                            React.createElement("label", { className: "inputEmail3" }, "Email addres"),
                            React.createElement("input", { className: "form-control", type: "email", name: "name", placeholder: "Enter email" }),
                            React.createElement("label", { className: "inputPassword3" }, "Password"),
                            React.createElement("input", { className: "form-control", type: "password", name: "password", placeholder: "Enter password" }),
                            React.createElement(react_router_dom_1.Link, { to: "Registration" }, "Registration")),
                        React.createElement("div", { className: "modal-footer" },
                            React.createElement("input", { className: "btn btn-lg btn-primary btn-block", type: "submit", value: "Send", onClick: this.handleSubmit }))))));
        }
        else {
            return (React.createElement(react_router_1.Redirect, { to: "/item1" }));
        }
    };
    return Login;
}(React.Component));
exports.Login = Login;
var ModalLogin = /** @class */ (function (_super) {
    __extends(ModalLogin, _super);
    function ModalLogin(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            loggedIn: false
        };
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }
    ModalLogin.prototype.handleSubmit = function () {
        sessionStorage.setItem("token", "123");
        this.setState({
            loggedIn: true
        });
    };
    ModalLogin.prototype.render = function () {
        if (this.state.loggedIn === false) {
            return (React.createElement("div", { className: "modal", role: "dialog" },
                React.createElement("div", { className: "modal-dialog", role: "document" },
                    React.createElement("div", { className: "modal-content" },
                        React.createElement("div", { className: "modal-header" },
                            React.createElement("h3", { className: "modal-title" }, "Login page")),
                        React.createElement("div", { className: "modal-body" },
                            React.createElement("label", { className: "inputEmail3" }, "Email addres"),
                            React.createElement("input", { className: "form-control", type: "email", name: "name", placeholder: "Enter email" }),
                            React.createElement("label", { className: "inputPassword3" }, "Password"),
                            React.createElement("input", { className: "form-control", type: "password", name: "password", placeholder: "Enter password" }),
                            React.createElement(react_router_dom_1.Link, { to: "Registration" }, "Registration")),
                        React.createElement("div", { className: "modal-footer" },
                            React.createElement("input", { className: "btn btn-lg btn-primary btn-block", type: "submit", value: "Send", onClick: this.handleSubmit }))))));
        }
        else {
            return null;
        }
    };
    return ModalLogin;
}(React.Component));
exports.ModalLogin = ModalLogin;
//# sourceMappingURL=Login.js.map