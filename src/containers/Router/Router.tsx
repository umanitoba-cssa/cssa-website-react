import { Route, Routes } from "react-router-dom";
import { HistoryRouter } from "./HistoryRouter";
import React from "react";
import { HistoryContext } from "../App/App";
import { Routes as RouteMappings } from "../../utils/Routes";

export const Router: React.FC = () => {
    const history = React.useContext(HistoryContext)
    const routeElems = RouteMappings.map((route) => {
        return (
            <Route key={route.path} path={route.path} element={route.component} />
        )
    })

    return (
        <HistoryRouter history={history}>
            <Routes>
                {routeElems}
            </Routes>
        </HistoryRouter>
    )
}