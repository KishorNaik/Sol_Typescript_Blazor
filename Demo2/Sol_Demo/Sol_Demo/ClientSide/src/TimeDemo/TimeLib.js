"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var moment_1 = __importDefault(require("moment"));
var TimeLib = /** @class */ (function () {
    function TimeLib() {
        this.OnTest = function () {
            return moment_1.default().format();
        };
        console.log("Test");
    }
    return TimeLib;
}());
exports.default = TimeLib;
