import { Chip } from '@mui/material'
import { Cancel } from '@mui/icons-material'
import { useTranslation } from 'react-i18next'

import { StatusChipsProps } from '../StatusChips.config'

export function InDowntimeChip({ context, size = 'small' }: StatusChipsProps) {
  const { t } = useTranslation('Status')

  return (
    <Chip
      sx={{
        color: 'white',
        bgcolor(theme) {
          return theme.palette.inDowntime.main
        },
      }}
      size={size}
      label={t('inDowntime', { context })}
      icon={<Cancel fontSize="small" color="inherit" />}
    />
  )
}
