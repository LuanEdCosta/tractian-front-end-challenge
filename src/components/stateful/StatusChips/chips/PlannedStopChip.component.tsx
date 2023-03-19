import { Chip } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { EventBusy } from '@mui/icons-material'

import { StatusChipsProps } from '../StatusChips.config'

export function PlannedStopChip({ context, size = 'small' }: StatusChipsProps) {
  const { t } = useTranslation('Status')

  return (
    <Chip
      sx={{
        color: 'white',
        bgcolor(theme) {
          return theme.palette.plannedStop.main
        },
      }}
      size={size}
      label={t('plannedStop', { context })}
      icon={<EventBusy fontSize="small" color="inherit" />}
    />
  )
}
