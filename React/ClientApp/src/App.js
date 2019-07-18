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
var react_router_1 = require("react-router");
var react_router_dom_1 = require("react-router-dom");
require("./App.css");
var React = require("react");
var Login_1 = require("../src/Login");
var Modal_1 = require("../src/Modal");
var Settings_1 = require("../src/Settings");
var Cameras_1 = require("../src/Cameras");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement(react_router_dom_1.BrowserRouter, null,
            React.createElement(react_router_dom_1.Switch, null,
                React.createElement(react_router_1.Route, { exact: true, path: "/", component: Login_1.Login }),
                React.createElement(react_router_1.Route, { path: "/Login", component: Login_1.Login }),
                React.createElement(react_router_1.Route, { path: "/Registration", component: Login_1.Registration }),
                React.createElement(react_router_1.Route, { path: "/Item1", component: Item1 }),
                React.createElement(react_router_1.Route, { path: "/Item2", component: exports.Item2 }),
                React.createElement(react_router_1.Route, { path: "/Item3", component: exports.Item3 }),
                React.createElement(react_router_1.Route, { path: "/settingsCamera", component: SettingsCamera }),
                React.createElement(react_router_1.Route, { path: "/settingsService", component: SettingsService }),
                React.createElement(react_router_1.Route, { component: NotFound }))));
    };
    App.displayName = App.name;
    return App;
}(React.Component));
exports.default = App;
var MainMenu = /** @class */ (function (_super) {
    __extends(MainMenu, _super);
    function MainMenu(props) {
        var _this = _super.call(this, props) || this;
        _this.toggleOpen = function () { return _this.setState({ isOpen: !_this.state.isOpen }); };
        _this.state = {
            showModal: true,
            isOpen: false
        };
        return _this;
    }
    MainMenu.prototype.componentWillMount = function () {
        var token = sessionStorage.getItem("token");
        if (token == "123") {
            this.setState({ showModal: false });
        }
    };
    MainMenu.prototype.render = function () {
        var modal = this.state.showModal ? (React.createElement(Modal_1.Modal, null,
            React.createElement("div", { className: "modal" },
                React.createElement(Login_1.ModalLogin, null)))) : null;
        var menuClass = "dropdown-menu" + (this.state.isOpen ? " show" : "");
        return (React.createElement("div", null,
            React.createElement("nav", { className: "navbar navbar-expand-lg navbar-light bg-light" },
                React.createElement(react_router_dom_1.NavLink, { to: "/Item1", className: "navbar-brand" }, "Item1"),
                React.createElement(react_router_dom_1.NavLink, { to: "/Item2", className: "navbar-brand" }, "Item2"),
                React.createElement(react_router_dom_1.NavLink, { to: "/Item3", className: "navbar-brand" }, "Item3"),
                React.createElement("a", { className: "nav-link dropdown-toggle", id: "navbarDropdown", role: "button", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false", onClick: this.toggleOpen }, "Settings"),
                React.createElement("div", { className: "dropdown", onClick: this.toggleOpen },
                    React.createElement("div", { className: menuClass, "aria-labelledby": "navbarDropdown" },
                        React.createElement(react_router_dom_1.NavLink, { to: "/settingsCamera" },
                            React.createElement("p", { className: "dropdown-item" }, "Camera settings")),
                        React.createElement(react_router_dom_1.NavLink, { to: "/settingsService" },
                            React.createElement("p", { className: "dropdown-item" }, "Service settings"))))),
            modal));
    };
    return MainMenu;
}(React.Component));
exports.PageTemplate = function (_a) {
    var children = _a.children;
    return React.createElement("div", { className: "page" },
        React.createElement(MainMenu, null),
        children);
};
var Item1 = /** @class */ (function (_super) {
    __extends(Item1, _super);
    function Item1(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            cameras: null,
            viewFiltres: false
        };
        return _this;
    }
    ;
    Item1.prototype.componentWillMount = function () {
        var _this = this;
        var cameras = new Cameras_1.Cameras;
        cameras.getCameras().then(function (result) {
            _this.setState({ cameras: result });
        });
    };
    Item1.prototype.handleSubmit = function (e) {
        if (e.target.checked) {
            this.setState({ viewFiltres: true });
        }
        else {
            this.setState({ viewFiltres: false });
        }
    };
    Item1.prototype.render = function () {
        var masCameras = [];
        for (var item in this.state.cameras) {
            masCameras.push(React.createElement("option", { key: this.state.cameras[item].name }, this.state.cameras[item].name));
        }
        return (React.createElement(exports.PageTemplate, null,
            React.createElement("div", { className: "InputForm" },
                React.createElement("select", { className: "form-control", id: "exampleFormControlSelect1" },
                    ">",
                    masCameras),
                React.createElement("input", { type: "checkbox", name: "CheckBoxViewFiltres", onChange: this.handleSubmit.bind(this) }),
                "View filtres",
                this.state.viewFiltres && React.createElement(Filtres, null),
                React.createElement("input", { type: "submit", value: "Find", className: "btn btn-lg btn-primary btn-block" }))));
    };
    return Item1;
}(React.Component));
var Filtres = function () {
    return React.createElement("div", null,
        React.createElement("h4", null, "Filtrs"),
        React.createElement("p", null, "Select data"),
        React.createElement("input", { type: "date" }),
        React.createElement("p", null, "Beginning period"),
        React.createElement("input", { type: "time" }),
        React.createElement("p", null, "End period"),
        React.createElement("input", { type: "time" }));
};
exports.Item2 = function () {
    return React.createElement(exports.PageTemplate, null,
        React.createElement("section", { className: "" },
            React.createElement("h1", null, "Item2")));
};
exports.Item3 = function () {
    return React.createElement(exports.PageTemplate, null,
        React.createElement("section", { className: "" },
            React.createElement("h1", null, "Item3")));
};
var SettingsCamera = /** @class */ (function (_super) {
    __extends(SettingsCamera, _super);
    function SettingsCamera(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            dataJson: null
        };
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }
    SettingsCamera.prototype.componentWillMount = function () {
        var _this = this;
        var settingsForCamera = new Settings_1.Settings("Camera");
        settingsForCamera.getSettings().then(function (result) {
            _this.setState({ dataJson: result });
        });
    };
    SettingsCamera.prototype.handleChange = function (item, event) {
        this.state.dataJson[event.target.name] = event.target.value;
        this.setState({ dataJson: this.state.dataJson });
    };
    SettingsCamera.prototype.render = function () {
        var _this = this;
        var masInput = [];
        var mapInput = [];
        for (var item in this.state.dataJson) {
            masInput.push(React.createElement("label", { className: "inputEmail3" },
                item,
                " :"), React.createElement("input", { className: "form-control", type: "text", key: item, name: item, value: this.state.dataJson[item], onChange: function (e) { return _this.handleChange(item, e); } }));
        }
        mapInput.push(masInput.map(function (item) { return React.createElement("p", null,
            " ",
            item); }));
        return (React.createElement(exports.PageTemplate, null,
            React.createElement("section", { className: "" },
                React.createElement("h1", null, "Camera settings"),
                React.createElement("div", null,
                    React.createElement("form", { method: "post", action: "/setConfigForCamera" },
                        React.createElement("div", { className: "form" }, mapInput),
                        React.createElement("button", { type: "submit", className: "btn btn-primary" }, "Save"))))));
    };
    return SettingsCamera;
}(React.Component));
var SettingsService = /** @class */ (function (_super) {
    __extends(SettingsService, _super);
    function SettingsService(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            dataJson: null
        };
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }
    SettingsService.prototype.componentWillMount = function () {
        var _this = this;
        var settingsForCamera = new Settings_1.Settings("Service");
        settingsForCamera.getSettings().then(function (result) {
            _this.setState({ dataJson: result });
        });
    };
    SettingsService.prototype.handleChange = function (item, event) {
        this.state.dataJson[event.target.name] = event.target.value;
        this.setState({ dataJson: this.state.dataJson });
    };
    SettingsService.prototype.render = function () {
        var _this = this;
        var masInput = [];
        var inputMap = [];
        for (var item in this.state.dataJson) {
            masInput.push(React.createElement("label", { className: "inputEmail3" },
                item,
                " :"), React.createElement("input", { className: "form-control", type: "text", key: item, name: item, value: this.state.dataJson[item], onChange: function (e) { return _this.handleChange(item, e); } }));
        }
        inputMap.push(masInput.map(function (item) { return React.createElement("p", null,
            " ",
            item); }));
        return (React.createElement(exports.PageTemplate, null,
            React.createElement("section", { className: "" },
                React.createElement("h1", null, "Servise settings"),
                React.createElement("div", null,
                    React.createElement("form", { method: "post", action: "/setConfigForService" },
                        React.createElement("div", { className: "form" }, inputMap),
                        React.createElement("button", { type: "submit", className: "btn btn-primary" }, "Save"))))));
    };
    return SettingsService;
}(React.Component));
var NotFound = /** @class */ (function (_super) {
    __extends(NotFound, _super);
    function NotFound() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NotFound.prototype.render = function () {
        return (React.createElement("div", { className: "NotFound" },
            React.createElement("h1", null, "Resource not found")));
    };
    return NotFound;
}(React.Component));
//# sourceMappingURL=App.js.map