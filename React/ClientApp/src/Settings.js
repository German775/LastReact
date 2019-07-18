"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.css");
var Settings = /** @class */ (function () {
    function Settings(typeSettings) {
        this.typeSettings = typeSettings;
    }
    Settings.prototype.getSettings = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            if (_this.typeSettings == "Camera") {
                xhr.open("get", '/getConfig?typeConfig=Camera', true);
            }
            else if (_this.typeSettings == "Service") {
                xhr.open("get", '/getConfig?typeConfig=Service', true);
            }
            xhr.onload = function () { return resolve(JSON.parse(xhr.responseText)); };
            xhr.onerror = function () { return reject(xhr.statusText); };
            xhr.send();
        });
    };
    return Settings;
}());
exports.Settings = Settings;
//# sourceMappingURL=Settings.js.map