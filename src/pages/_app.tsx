import '../styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';

import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '../../src/createEmotionCache';
import CssBaseline from '@mui/material/CssBaseline';

const clientSideEmotionCache = createEmotionCache();
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function App(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      {/* CssBaseline は、グローバルリセット */}
      {/* https://mui.com/material-ui/react-css-baseline/ */}
      <CssBaseline />
      <Head>
        {/* https://mui.com/material-ui/getting-started/usage/ */}
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </CacheProvider>
  )
}

export default App;