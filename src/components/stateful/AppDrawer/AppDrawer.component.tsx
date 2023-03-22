import { useTranslation } from 'react-i18next'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  List,
  Drawer,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from '@mui/material'

import { NAVBAR_HEIGHT } from 'src/components'

import { DRAWER_WIDTH, DRAWER_ITEMS } from './AppDrawer.config'

type AppDrawerProps = {
  isOpen: boolean
  isPersistentDrawer: boolean
  handleToggleDrawer: () => void
}

export function AppDrawer({
  isOpen,
  isPersistentDrawer,
  handleToggleDrawer,
}: AppDrawerProps) {
  const { t } = useTranslation('Drawer')
  const { pathname } = useLocation()
  const navigate = useNavigate()

  return (
    <Drawer
      PaperProps={{
        sx: isPersistentDrawer
          ? {
              mt: `${NAVBAR_HEIGHT}px`,
              width: isOpen ? DRAWER_WIDTH : 0,
              height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
              overflowX: 'hidden',
              transition: (theme) => {
                return theme.transitions.create('width', {
                  easing: theme.transitions.easing.sharp,
                  duration: theme.transitions.duration.enteringScreen,
                })
              },
            }
          : {
              width: DRAWER_WIDTH,
            },
      }}
      anchor="left"
      variant={isPersistentDrawer ? 'permanent' : 'temporary'}
      onClose={isPersistentDrawer ? undefined : handleToggleDrawer}
      open={isPersistentDrawer ? true : isOpen}
    >
      <List disablePadding>
        {DRAWER_ITEMS.map((item) => {
          const { Icon } = item
          const isSelected = pathname === item.to

          function handleNavigate() {
            navigate(item.to)
            if (!isPersistentDrawer) handleToggleDrawer()
          }

          if (item.hidden) return null

          return (
            <ListItemButton
              sx={{ px: 3 }}
              key={item.to}
              selected={isSelected}
              onClick={handleNavigate}
            >
              <ListItemIcon
                sx={{
                  color: isSelected ? 'primary.dark' : 'text.primary',
                }}
              >
                <Icon />
              </ListItemIcon>

              <ListItemText
                primaryTypographyProps={{ noWrap: true }}
                primary={t(item.labelKey)}
              />
            </ListItemButton>
          )
        })}
      </List>
    </Drawer>
  )
}
