import '../styles/globals.css';
import { useState } from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import {
  createTheme,
  CssBaseline,
  ThemeProvider
} from '@mui/material';

const App = ({ Component, pageProps }: AppProps) => {
  // ダークモードの切り替えに使用
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      background: {
        default: '#f1f1f1'
      },
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head>
        {/* https://mui.com/material-ui/getting-started/usage/ */}
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Smart Moving</title>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App;