import { MainPage } from "pages/Main";
import { RouteProps } from "react-router-dom";

export enum AppRoutes {
    MAIN = "main",
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
};
