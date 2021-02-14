"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePage = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Page_1 = require("../Page");
const HomePage = ({ ...props }) => {
    return (react_1.default.createElement(Page_1.Page, Object.assign({}, props),
        react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(react_native_1.Text, null, "Home"))));
};
exports.HomePage = HomePage;
