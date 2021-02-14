"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const BottomBar_1 = require("../../components/BottomBar");
const Page_styles_1 = require("./Page.styles");
const Page = ({ children, navigation, route, noBottomBar, style, }) => {
    return (react_1.default.createElement(react_native_1.SafeAreaView, { style: Page_styles_1.PageStyleSheet.container },
        react_1.default.createElement(react_native_1.View, { style: { ...Page_styles_1.PageStyleSheet.main, ...style } }, children),
        !noBottomBar && (react_1.default.createElement(BottomBar_1.BottomBar, { navigate: navigation.navigate, activeIcon: route === null || route === void 0 ? void 0 : route.name }))));
};
exports.Page = Page;
