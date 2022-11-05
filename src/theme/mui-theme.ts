import { createContext, useMemo, useState } from 'react'
import { createTheme, ThemeOptions } from '@mui/material/styles'

export const tokens = (mode: string) => ({
  ...(mode === 'dark'
    ? {
        blue: '#0466c8',
        background: 'white',
        darkBlue: '#03045e',
        lightBlue: '#304a58',
        oceanBlue: '#48cae4',
        blueBackground: '#caf0f8',
        cardColor: 'rgb(241, 240, 240)',
        cardColor2: 'white',
        red: '#f94144',
        svgColor: 'black',
        elevateShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px',
      }
    : {
        blue: '#0466c8',
        background: 'black',
        darkBlue: '#8eecf5',
        lightBlue: '#4895ef',
        oceanBlue: '#12131d',
        blueBackground: '#12131d',
        cardColor: '#12131d',
        cardColor2: '#12131d',
        red: '#12131d',
        svgColor: '#8eecf5',
        elevateShadow: 'rgba(32, 29, 233, 0.637) 0px 25px 50px -12px',
      }),
})
export type PaletteMode = 'light' | 'dark'

// mui theme settings
export const themeSettings = (mode: string): ThemeOptions => {
  const colors = tokens(mode)
  return {
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1600,
      },
    },
    palette: {
      mode: mode as PaletteMode,
      ...(mode === 'dark'
        ? {
            // palette values for dark mode
            primary: {
              main: colors.blue,
            },
            // secondary: {
            //   main: colors.greenAccent[500],
            // },
            neutral: {
              primary: colors.cardColor,
              secondary: colors.cardColor2,
            },
            text: {
              primary: colors.darkBlue,
              secondary: colors.lightBlue,
            },
            background: {
              default: colors.background,
            },
            custom: {
              shadow: colors.elevateShadow,
            },
          }
        : {
            // palette values for light mode
            primary: {
              main: colors.blue,
            },
            // secondary: {
            //   main: colors.greenAccent[500],
            // },
            neutral: {
              primary: colors.cardColor,
              secondary: colors.cardColor2,
            },
            text: {
              primary: colors.darkBlue,
              secondary: colors.lightBlue,
            },
            background: {
              default: colors.background,
            },
            custom: {
              shadow: colors.elevateShadow,
            },
          }),
    },
    typography: {
      fontFamily: ['Nunito', 'sans-serif'].join(','),
      fontSize: 12,
      h1: {
        fontFamily: ['Nunito', 'sans-serif'].join(','),
        fontSize: 40,
      },
      h2: {
        fontFamily: ['Nunito', 'sans-serif'].join(','),
        fontSize: '3.5rem',
      },
      h3: {
        fontFamily: ['Nunito', 'sans-serif'].join(','),
        fontSize: '2rem',
      },
      h4: {
        fontFamily: ['Nunito', 'sans-serif'].join(','),
        fontSize: '2rem',
      },
      h5: {
        fontFamily: ['Nunito', 'sans-serif'].join(','),
        fontSize: 16,
      },
      h6: {
        fontFamily: ['Nunito', 'sans-serif'].join(','),
        fontSize: 14,
      },
    },
  }
}

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
})

export const useMode = () => {
  const [mode, setMode] = useState('dark')

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
    }),
    [],
  )

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
  return [theme, colorMode]
}
