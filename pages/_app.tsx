import * as React from 'react';
import '../src/styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { AuthProvider } from '../src/contexts/AuthContext';
import { Router } from 'next/router';
import { PropagateLoader } from 'react-spinners';

const App = ({ Component, pageProps }: AppProps) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  Router.events.on('routeChangeStart', (url) => {
    setIsLoading(true);
  });

  Router.events.on('routeChangeComplete', (url) => {
    setIsLoading(false);
  });

  // ダークモードの切り替えに使用
  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(false);
  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      background: {
        default: '#f1f1f1',
      },
    },
  });
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <title>Smart Moving</title>
        </Head>
        {isLoading ? (
          <PropagateLoader
            color={'#36d7b7'}
            size={50}
            cssOverride={{
              position: 'absolute',
              top: '45%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              WebkitTransform: 'translate(-50%, -50%)',
              msTransform: 'translate(-50%, -50%)',
            }}
          />
        ) : (
          <Component {...pageProps} />
        )}
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
