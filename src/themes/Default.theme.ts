import { createTheme, responsiveFontSizes } from '@mui/material'

export const DefaultTheme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#1c5cf3',
        light: '#3d74f5',
        dark: '#0b49da',
      },
      inAlert: {
        main: '#f42525',
        light: '#f65555',
        dark: '#da0b0b',
      },
      inDowntime: {
        main: '#f2800d',
        light: '#f5993d',
        dark: '#c2660a',
      },
      inOperation: {
        main: '#089108',
        light: '#0ac20a',
        dark: '#056105',
      },
      plannedStop: {
        main: '#bd1bf3',
        light: '#c73df5',
        dark: '#a60bda',
      },
      unplannedStop: {
        main: '#c2c20a',
        light: '#dada0b',
        dark: '#aaaa09',
      },
    },
    typography: {
      fontSize: 14,
    },
    components: {
      MuiFormHelperText: {
        styleOverrides: {
          root: {
            marginLeft: 0,
            marginRight: 0,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            boxShadow: 'none',
            ':hover': {
              boxShadow: 'none',
            },
            ':focus': {
              boxShadow: 'none',
            },
          },
        },
      },
    },
  }),
)
