import { ReactElement, ReactNode } from 'react'
import Head from 'next/head'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import { CacheProvider, EmotionCache, ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'

import '@fontsource/nunito/300.css'
import '@fontsource/nunito/400.css'
import '@fontsource/nunito/500.css'
import '@fontsource/nunito/700.css'

import '../../styles/globals.css'
import { wrapper } from '@/src/store'
import { NextPageWithLayout } from '@/src/utils/types'
import createEmotionCache from '@/src/theme/createEmotionCache'
import { ColorModeContext, useMode } from '@/src/theme/mui-theme'

interface AppPropsWithStylesCache extends AppProps {
  Component: NextPageWithLayout
  emotionCache?: EmotionCache
}

type PropsType = {
  emotionCache: EmotionCache
  pageProps: (_page: ReactElement) => ReactNode
}

const clientSideEmotionCache = createEmotionCache()

function MyApp({ Component, ...rest }: AppPropsWithStylesCache) {
  const getLayout = Component.getLayout ?? ((page) => page)
  const [theme, colorMode] = useMode()
  const { store, props } = wrapper.useWrappedStore(rest)
  const { emotionCache = clientSideEmotionCache, pageProps } =
    props as PropsType
  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
        <title>Home</title>
      </Head>
      {/*FIXME: ColorModeContext value type -*/}
      <Provider store={store}>
        <ColorModeContext.Provider value={colorMode as any}>
          <CacheProvider value={emotionCache}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              {getLayout(<Component {...pageProps} />)}
            </ThemeProvider>
          </CacheProvider>
        </ColorModeContext.Provider>
      </Provider>
    </>
  )
}

export default MyApp
