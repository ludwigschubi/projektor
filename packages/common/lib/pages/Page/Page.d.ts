import React from "react";
export interface PageProps {
    children?: React.ReactNode | React.ReactNode[];
    route?: Record<string, string | object | undefined> | undefined;
    navigation?: any;
    noBottomBar?: boolean;
}
export declare const Page: React.FC<PageProps>;
//# sourceMappingURL=Page.d.ts.map