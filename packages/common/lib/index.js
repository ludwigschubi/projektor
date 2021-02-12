"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWelcomeString = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const getWelcomeString = (name) => {
    return react_1.default.createElement(react_native_1.Text, { style: { color: "red" } },
        "Welcome ",
        name,
        " to our project");
};
exports.getWelcomeString = getWelcomeString;
