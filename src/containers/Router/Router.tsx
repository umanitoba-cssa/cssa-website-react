import { Route, Routes } from "react-router-dom";
import { HistoryRouter } from "./HistoryRouter";
import { Home } from "../../pages/Home/Home";
import { Team } from "../../pages/Team/Team";
import Resources from "../../pages/Resources/Resources";
import React from "react";
import { HistoryContext } from "../App/App";

export const Router: React.FC = () => {
    const history = React.useContext(HistoryContext)

    return (
        <HistoryRouter history={history}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/team" element={<Team />} />
                <Route path="/resources" element={<Resources />} />
            </Routes>
        </HistoryRouter>
    )
}