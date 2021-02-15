import React from "react";
export interface HomePageProps {
    route?: {
        name: string;
        key: string;
        params: {
            sessionId: string;
        };
    } | undefined;
    navigation?: any;
}
export declare const HomePage: React.FC<HomePageProps>;
//# sourceMappingURL=HomePage.d.ts.map