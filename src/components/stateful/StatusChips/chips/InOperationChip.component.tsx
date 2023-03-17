import { Chip } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { CheckCircle } from '@mui/icons-material'

import { StatusChipsProps } from '../StatusChips.config'

export function InOperationChip({ context, size = 'small' }: StatusChipsProps) {
  const { t } = useTranslation('Status')

  return (
    <Chip
      size={size}
      color="success"
      label={t('inOperation', { context })}
      icon={<CheckCircle fontSize="small" />}
    />
  )
}
