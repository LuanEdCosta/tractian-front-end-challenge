import { Chip } from '@mui/material'
import { Report } from '@mui/icons-material'
import { useTranslation } from 'react-i18next'

import { StatusChipsProps } from '../StatusChips.config'

export function InAlertChip({ context, size = 'small' }: StatusChipsProps) {
  const { t } = useTranslation('Status')

  return (
    <Chip
      size={size}
      color="warning"
      label={t('inAlert', { context })}
      icon={<Report fontSize="small" />}
    />
  )
}
