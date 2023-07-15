import React from 'react';
import { Router } from 'react-router-dom';

export interface IHistoryRouter {
    basename?: string;
    children?: React.ReactNode;
    history: any;
}

export const HistoryRouter: React.FC<IHistoryRouter> = ({basename, children, history}: IHistoryRouter) => {
    const [state, setState] = React.useState({
        action: history.action,
        location: history.location
    });

    React.useLayoutEffect(() => history.listen(setState), [history])

    return (
        <Router
            basename={basename}
            children={children}
            location={state.location}
            navigationType={state.action}
            navigator={history}
        />
    )
}