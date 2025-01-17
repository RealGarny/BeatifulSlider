import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "../lib/routeConfig";

export const AppRouter = () => (
    <>
        <Suspense fallback={"loading"}>
            <div className="page-wrapper">
                <Routes>
                    {Object.values(routeConfig).map(({ element, path, children }) => (
                        <Route key={path} element={element} path={path}>
                            {children}
                        </Route>
                    ))}
                </Routes>
            </div>
        </Suspense>
    </>
);
