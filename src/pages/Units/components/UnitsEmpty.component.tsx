import { Groups } from '@mui/icons-material'
import { useTranslation } from 'react-i18next'

import { NoData } from 'src/components'

export function UnitsEmpty() {
  const { t } = useTranslation('Units')

  return <NoData message={t('emptyMessage')} IconComponent={Groups} />
}
