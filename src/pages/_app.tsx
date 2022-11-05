import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import { CacheProvider, EmotionCache, ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'

import '@fontsource/nunito/300.css'
import '@fontsource/nunito/400.css'
import '@fontsource/nunito/500.css'
import '@fontsource/nunito/700.css'

import { wrapper } from '@/src/store'
import { NextPageWithLayout } from '@/src/utils/types'
import createEmotionCache from '@/src/theme/createEmotionCache'
import { ColorModeContext, useMode } from '@/src/theme/mui-theme'

interface AppPropsWithStylesCache extends AppProps {
  Component: NextPageWithLayout
  emotionCache?: EmotionCache
}

const clientSideEmotionCache = createEmotionCache()

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: AppPropsWithStylesCache) {
  const getLayout = Component.getLayout ?? ((page) => page)
  const [theme, colorMode] = useMode()
  return (
    <>
      {/*FIXME: ColorModeContext value type -*/}
      <ColorModeContext.Provider value={colorMode as any}>
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {getLayout(<Component {...pageProps} />)}
          </ThemeProvider>
        </CacheProvider>
      </ColorModeContext.Provider>
    </>
  )
}

export default wrapper.withRedux(MyApp)
