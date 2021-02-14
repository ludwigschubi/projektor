import React from "react";
import { StyleProp, ViewStyle } from "react-native";
export interface PageProps {
    children?: React.ReactNode | React.ReactNode[];
    route?: Record<string, string | object | undefined> | undefined;
    navigation?: any;
    noBottomBar?: boolean;
    style?: StyleProp<ViewStyle>;
}
export declare const Page: React.FC<PageProps>;
//# sourceMappingURL=Page.d.ts.map