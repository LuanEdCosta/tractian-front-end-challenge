import { CssBaseline, Stack } from '@mui/material'

import { AppRoutes } from 'src/routes'

import { AppErrorBoundary } from './AppErrorBoundary.component'

export function AppContent() {
  return (
    <>
      <CssBaseline />
      <Stack minHeight="100vh">
        <AppErrorBoundary>
          <AppRoutes />
        </AppErrorBoundary>
      </Stack>
    </>
  )
}
