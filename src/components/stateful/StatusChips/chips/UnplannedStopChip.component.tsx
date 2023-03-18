import { Chip } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { DoNotTouch } from '@mui/icons-material'

import { StatusChipsProps } from '../StatusChips.config'

export function UnplannedStopChip({
  context,
  size = 'small',
}: StatusChipsProps) {
  const { t } = useTranslation('Status')

  return (
    <Chip
      size={size}
      color="error"
      label={t('unplannedStop', { context })}
      icon={<DoNotTouch fontSize="small" />}
    />
  )
}
