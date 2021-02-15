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
const HomePage = ({ ...props }) => {
    var _a;
    // const { data, error, isLoading } = useQuery("sessions", getActiveSessions);
    const currentUser = context_1.useCurrentUser();
    console.debug(currentUser);
    return (react_1.default.createElement(Page_1.Page, Object.assign({}, props),
        react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(Button_1.Button, { onPress: () => {
                    var _a, _b;
                    sessions_1.logOutOfSession((_b = (_a = currentUser[0]) === null || _a === void 0 ? void 0 : _a.sessionId) !== null && _b !== void 0 ? _b : "").then(() => {
                        props.navigation.navigate("Login");
                    });
                } }, `Log out of ${(_a = currentUser[0]) === null || _a === void 0 ? void 0 : _a.webId}`),
            react_1.default.createElement(react_native_1.Text, null, "Home"))));
};
exports.HomePage = HomePage;
