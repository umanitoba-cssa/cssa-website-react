import { HistoryContext } from "../App/App";
import React from "react";

interface INavLink {
    to: string;
    children?: React.ReactNode;
}

export const NavLink = ({to, children}: INavLink) => {
    const history = React.useContext(HistoryContext)

    const selectedPath = history?.location.pathname;
    const onClick = (e: React.MouseEvent) => {
        e.preventDefault();
        history?.push(to);
    }

    return (
        <div className={selectedPath === to ? "selected" : ""} onClick={onClick}>
            {children}
        </div>
    )
}