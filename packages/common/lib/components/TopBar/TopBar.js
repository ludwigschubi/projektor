"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopBar = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const TopBar_styles_1 = require("./TopBar.styles");
const TopBar = ({}) => {
    return (react_1.default.createElement(react_native_1.View, { style: { ...TopBar_styles_1.TopBarStyleSheet.container, paddingTop: react_native_1.StatusBar.currentHeight } },
        react_1.default.createElement(react_native_1.Text, null, "Top")));
};
exports.TopBar = TopBar;
