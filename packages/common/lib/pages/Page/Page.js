"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const BottomBar_1 = require("../../components/BottomBar");
const TopBar_1 = require("../../components/TopBar");
const Page_styles_1 = require("./Page.styles");
const Page = ({ children }) => {
    return (react_1.default.createElement(react_native_1.SafeAreaView, { style: Page_styles_1.PageStyleSheet.container },
        react_1.default.createElement(TopBar_1.TopBar, null),
        react_1.default.createElement(react_native_1.View, { style: Page_styles_1.PageStyleSheet.main }, children),
        react_1.default.createElement(BottomBar_1.BottomBar, null)));
};
exports.Page = Page;
