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
const plusIcon = require("../../../src/assets/icons/plus-circle.png");
const plusIconActive = require("../../../src/assets/icons/plus-circle-1.png");
const bellIcon = require("../../../src/assets/icons/bell.png");
const bellIconActive = require("../../../src/assets/icons/bell-1.png");
const homeIcon = require("../../../src/assets/icons/home.png");
const homeIconActive = require("../../../src/assets/icons/home-1.png");
const searchIcon = require("../../../src/assets/icons/search.png");
const searchIconActive = require("../../../src/assets/icons/search-1.png");
const BottomBar = ({ navigate, activeIcon, }) => {
    return (react_1.default.createElement(react_native_1.View, { style: BottomBar_styles_1.BottomBarStyleSheet.container },
        react_1.default.createElement(Icon_1.Icon, { onPress: () => {
                if (activeIcon !== "Home") {
                    navigate("Home");
                }
            }, icon: homeIcon, active: activeIcon === "Home", activeIcon: homeIconActive }),
        react_1.default.createElement(Icon_1.Icon, { onPress: () => {
                if (activeIcon !== "Search") {
                    navigate("Search");
                }
            }, active: activeIcon === "Search", icon: searchIcon, activeIcon: searchIconActive }),
        react_1.default.createElement(Icon_1.Icon, { onPress: () => {
                if (activeIcon !== "Plus") {
                    navigate("Plus");
                }
            }, active: activeIcon === "Plus", icon: plusIcon, activeIcon: plusIconActive }),
        react_1.default.createElement(Icon_1.Icon, { onPress: () => {
                if (activeIcon !== "Notifications") {
                    navigate("Notifications");
                }
            }, active: activeIcon === "Notifications", icon: bellIcon, activeIcon: bellIconActive }),
        react_1.default.createElement(Icon_1.Icon, { onPress: () => {
                if (activeIcon !== "Profile") {
                    navigate("Profile");
                }
            }, active: activeIcon === "Profile", icon: bellIcon, activeIcon: bellIconActive })));
};
exports.BottomBar = BottomBar;
