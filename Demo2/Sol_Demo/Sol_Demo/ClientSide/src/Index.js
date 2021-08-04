"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCurrentDateTime = void 0;
var TimeLib_1 = __importDefault(require("./TimeDemo/TimeLib"));
function GetCurrentDateTime() {
    return new TimeLib_1.default().OnTest();
}
exports.GetCurrentDateTime = GetCurrentDateTime;
