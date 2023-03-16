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
