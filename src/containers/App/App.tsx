import { Box, useColorMode } from '@chakra-ui/react';
import { observer } from 'mobx-react';
import { Router } from '../Router/Router';
import './App.css';
import React from 'react';
import { BrowserHistory, createBrowserHistory } from 'history';
import { Navbar } from '../Navbar/Navbar';

export const HistoryContext = React.createContext<BrowserHistory | null>(null);

 

const App = observer(() => {
    const [history] = React.useState<BrowserHistory | null>(createBrowserHistory());
    const [flip, setFlip] = React.useState(false);

    history?.listen(() => {
        setFlip(!flip);
    });

    const { setColorMode } = useColorMode();
    setColorMode('dark')

    return (
        <div className="App" style={{minHeight: "100vh"}}>
            <HistoryContext.Provider value={history}>
                <Navbar />
                <Box>
                    <Router />
                </Box>
            </HistoryContext.Provider>
        </div>
    );
});

export default App;
