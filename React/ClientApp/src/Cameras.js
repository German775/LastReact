"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.css");
var Cameras = /** @class */ (function () {
    function Cameras() {
    }
    Cameras.prototype.getCameras = function () {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open("get", '/getCameras', true);
            xhr.onload = function () { return resolve(JSON.parse(xhr.responseText)); };
            xhr.onerror = function () { return reject(xhr.statusText); };
            xhr.send();
        });
    };
    return Cameras;
}());
exports.Cameras = Cameras;
//# sourceMappingURL=Cameras.js.map