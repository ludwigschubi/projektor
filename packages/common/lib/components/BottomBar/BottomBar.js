"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BottomBar = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Icon_1 = require("../Icon");
const BottomBar_styles_1 = require("./BottomBar.styles");
const plusIcon = require("../../../src/images/icons/plus-circle.png");
const plusIconActive = require("../../../src/images/icons/plus-circle-1.png");
const bellIcon = require("../../../src/images/icons/bell.png");
const bellIconActive = require("../../../src/images/icons/bell.png");
const homeIcon = require("../../../src/images/icons/home.png");
const homeIconActive = require("../../../src/images/icons/home-1.png");
const searchIcon = require("../../../src/images/icons/search.png");
const searchIconActive = require("../../../src/images/icons/search-1.png");
const BottomBar = ({}) => {
    return (react_1.default.createElement(react_native_1.View, { style: BottomBar_styles_1.BottomBarStyleSheet.container },
        react_1.default.createElement(Icon_1.Icon, { icon: homeIcon, activeIcon: homeIconActive }),
        react_1.default.createElement(Icon_1.Icon, { icon: searchIcon, activeIcon: searchIconActive }),
        react_1.default.createElement(Icon_1.Icon, { icon: plusIcon, activeIcon: plusIconActive }),
        react_1.default.createElement(Icon_1.Icon, { icon: bellIcon, activeIcon: bellIconActive }),
        react_1.default.createElement(Icon_1.Icon, { icon: bellIcon, activeIcon: bellIconActive })));
};
exports.BottomBar = BottomBar;
