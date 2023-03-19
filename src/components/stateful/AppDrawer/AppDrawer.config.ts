import {
  People,
  SvgIconComponent,
  PrecisionManufacturing,
} from '@mui/icons-material'

type DrawerItem = {
  to: string
  hidden: boolean
  labelKey: string
  Icon: SvgIconComponent
}

export const DRAWER_WIDTH = 300

export const DRAWER_ITEMS: DrawerItem[] = [
  {
    to: '/',
    hidden: false,
    labelKey: 'items.assets',
    Icon: PrecisionManufacturing,
  },
  {
    to: '/users',
    hidden: false,
    labelKey: 'items.users',
    Icon: People,
  },
]
