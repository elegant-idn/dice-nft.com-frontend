import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { AlertMessageProvider } from './contexts/AlertMessageContext';
import { WalletProvider } from './contexts/WalletContext';
import { OrderDialogProvider } from './contexts/OrderDialogContext';
import { LoadingProvider } from './contexts/LoadingContext';
import Routes from './Routes';
import { createTheme, ThemeProvider } from '@mui/material';

const getLibrary = (provider) => {
  const library = new Web3Provider(provider, "any");
  return library;
};

const theme = createTheme({});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <LoadingProvider>
          <AlertMessageProvider>
            <WalletProvider>
              <OrderDialogProvider>
                <Router>
                  <Routes />
                </Router>
              </OrderDialogProvider>
            </WalletProvider>
          </AlertMessageProvider>
        </LoadingProvider>
      </Web3ReactProvider>
    </ThemeProvider>
  );
}

export default App;
