import { useTranslation } from 'react-i18next'
import { Menu as MenuIcon } from '@mui/icons-material'
import { Stack, AppBar, Toolbar, IconButton, Typography } from '@mui/material'

import { NAVBAR_HEIGHT } from './AppNavbar.config'

type AppNavbarProps = {
  hasDrawer?: boolean
  handleToggleDrawer?: () => void
}

export function AppNavbar({
  hasDrawer = true,
  handleToggleDrawer,
}: AppNavbarProps) {
  const { t } = useTranslation('Glossary')

  return (
    <AppBar
      sx={{
        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)',
        height: NAVBAR_HEIGHT,
        minHeight: NAVBAR_HEIGHT,
        maxHeight: NAVBAR_HEIGHT,
      }}
      position="sticky"
    >
      <Toolbar>
        {hasDrawer && (
          <IconButton
            sx={{ mr: 2 }}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleToggleDrawer}
          >
            <MenuIcon />
          </IconButton>
        )}

        <Stack flex={1} direction="row" alignItems="center">
          <Typography variant="h6" fontWeight="normal">
            {t('appName')}
          </Typography>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}
