"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePage = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const sessions_1 = require("../../resolvers/auth/sessions");
const Page_1 = require("../Page");
const Button_1 = require("../../components/Button");
const context_1 = require("../../context");
const profile_1 = require("../../resolvers/user/profile");
const HomePage = ({ ...props }) => {
    var _a;
    const currentUser = context_1.useCurrentUser();
    const { data, error, isLoading } = profile_1.useGetCurrentProfileQuery({
        webId: (_a = currentUser === null || currentUser === void 0 ? void 0 : currentUser.webId) !== null && _a !== void 0 ? _a : "",
    });
    return (react_1.default.createElement(Page_1.Page, Object.assign({}, props),
        react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(Button_1.Button, { onPress: () => {
                    var _a;
                    sessions_1.logOutOfSession((_a = currentUser === null || currentUser === void 0 ? void 0 : currentUser.sessionId) !== null && _a !== void 0 ? _a : "").then(() => {
                        props.navigation.navigate("Login");
                    });
                } }, `Log out of ${currentUser === null || currentUser === void 0 ? void 0 : currentUser.webId}`),
            react_1.default.createElement(react_native_1.Text, null, "Home"))));
};
exports.HomePage = HomePage;
