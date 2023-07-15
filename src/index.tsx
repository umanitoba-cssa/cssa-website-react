import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './containers/App/App';
import { ChakraProvider, ThemeConfig, extendTheme } from '@chakra-ui/react'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const config: ThemeConfig = {
    initialColorMode: 'dark',
}

const theme = extendTheme({
    config
})

root.render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <App />
        </ChakraProvider>
    </React.StrictMode>
);