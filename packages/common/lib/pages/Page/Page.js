"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page = void 0;
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const BottomBar_1 = require("../../components/BottomBar");
const context_1 = require("../../context");
const Page_styles_1 = require("./Page.styles");
const Page = ({ children, navigation, route, noBottomBar, style, }) => {
    const currentUser = context_1.useCurrentUser();
    react_1.useEffect(() => {
        if (currentUser.length === 0 && (route === null || route === void 0 ? void 0 : route.name) !== "Login") {
            navigation.navigate("Login");
        }
    }, []);
    return (react_1.default.createElement(react_native_1.SafeAreaView, { style: Page_styles_1.PageStyleSheet.container },
        react_1.default.createElement(react_native_1.View, { style: { ...Page_styles_1.PageStyleSheet.main, ...style } }, children),
        !noBottomBar && (react_1.default.createElement(BottomBar_1.BottomBar, { navigate: navigation.navigate, activeIcon: route === null || route === void 0 ? void 0 : route.name }))));
};
exports.Page = Page;
