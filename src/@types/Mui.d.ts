import '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Palette {
    inAlert: Palette['primary']
    inDowntime: Palette['primary']
    inOperation: Palette['primary']
    plannedStop: Palette['primary']
    unplannedStop: Palette['primary']
  }

  interface PaletteOptions {
    inAlert: PaletteOptions['primary']
    inDowntime: PaletteOptions['primary']
    inOperation: PaletteOptions['primary']
    plannedStop: PaletteOptions['primary']
    unplannedStop: PaletteOptions['primary']
  }
}
