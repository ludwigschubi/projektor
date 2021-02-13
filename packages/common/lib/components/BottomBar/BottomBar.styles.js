"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BottomBarStyleSheet = void 0;
const react_native_1 = require("react-native");
exports.BottomBarStyleSheet = react_native_1.StyleSheet.create({
    container: {
        width: '100%',
        height: 56,
        padding: 16,
        paddingTop: 8,
        paddingBottom: 8,
        flexDirection: 'row',
        backgroundColor: "white",
        justifyContent: "space-between",
        alignItems: "center",
        borderTopWidth: 1,
        borderTopColor: '#dddddd',
    },
});
