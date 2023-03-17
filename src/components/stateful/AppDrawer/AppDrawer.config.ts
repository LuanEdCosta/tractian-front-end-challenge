import { PrecisionManufacturing, SvgIconComponent } from '@mui/icons-material'

type DrawerItem = {
  to: string
  hidden: boolean
  labelKey: string
  Icon: SvgIconComponent
}

export const DRAWER_WIDTH = 325

export const DRAWER_ITEMS: DrawerItem[] = [
  {
    to: '/',
    hidden: false,
    labelKey: 'items.assets',
    Icon: PrecisionManufacturing,
  },
]
