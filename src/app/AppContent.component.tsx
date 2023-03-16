import { CssBaseline, Stack } from '@mui/material'

import { AppRoutes } from 'src/routes'

export function AppContent() {
  return (
    <>
      <CssBaseline />
      <Stack minHeight="100vh">
        <AppRoutes />
      </Stack>
    </>
  )
}
