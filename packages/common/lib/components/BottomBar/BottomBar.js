"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BottomBar = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const BottomBar_styles_1 = require("./BottomBar.styles");
const BottomBar = ({}) => {
    return (react_1.default.createElement(react_native_1.View, { style: BottomBar_styles_1.BottomBarStyleSheet.container },
        react_1.default.createElement(react_native_1.Text, null,
            "Bottom",
            react_native_1.StatusBar.currentHeight)));
};
exports.BottomBar = BottomBar;
