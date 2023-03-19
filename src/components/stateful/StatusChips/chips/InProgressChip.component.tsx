import { Chip } from '@mui/material'
import { Refresh } from '@mui/icons-material'
import { useTranslation } from 'react-i18next'

import { StatusChipsProps } from '../StatusChips.config'

export function InProgressChip({ context, size = 'small' }: StatusChipsProps) {
  const { t } = useTranslation('Status')

  return (
    <Chip
      size={size}
      color="warning"
      label={t('inProgress', { context })}
      icon={<Refresh fontSize="small" />}
    />
  )
}
