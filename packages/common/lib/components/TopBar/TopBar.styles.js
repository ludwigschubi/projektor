"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopBarStyleSheet = void 0;
const react_native_1 = require("react-native");
exports.TopBarStyleSheet = react_native_1.StyleSheet.create({
    container: {
        width: "100%",
        height: 56,
        padding: 16,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "flex-start",
        borderBottomWidth: 1,
        borderBottomColor: '#dddddd',
    },
    logo: {
        width: 194,
        height: 28,
    }
});
