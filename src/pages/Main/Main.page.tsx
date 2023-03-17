import { Stack } from '@mui/material'
import { Outlet } from 'react-router-dom'

import { AppNavbar, AppDrawer } from 'src/components'

import { useDrawerState } from './hooks/useDrawerState.hook'

export function MainPage() {
  const {
    isDrawerOpen,
    isPersistentDrawer,
    handleToggleDrawer,
    handleGetContentMarginLeft,
  } = useDrawerState()

  return (
    <Stack flex={1}>
      <AppNavbar handleToggleDrawer={handleToggleDrawer} />

      <AppDrawer
        isOpen={isDrawerOpen}
        isPersistentDrawer={isPersistentDrawer}
        handleToggleDrawer={handleToggleDrawer}
      />

      <Stack
        sx={{
          ml: handleGetContentMarginLeft(),
          transition: (theme) => {
            return theme.transitions.create('margin-left', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            })
          },
        }}
        flex={1}
      >
        <Outlet />
      </Stack>
    </Stack>
  )
}
