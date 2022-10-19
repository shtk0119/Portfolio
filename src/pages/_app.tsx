import * as React from 'react';
import '../styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { AuthProvider } from '../context/AuthContext';

const App = ({ Component, pageProps }: AppProps) => {
    // ダークモードの切り替えに使用
    const [isDarkMode, setIsDarkMode] = React.useState<boolean>(false);
    const theme = createTheme({
      palette: {
        mode: isDarkMode ? 'dark' : 'light',
        background: {
          default: '#f1f1f1'
        },
      }
    });
  return (
    <AuthProvider >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <title>Smart Moving</title>
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App;