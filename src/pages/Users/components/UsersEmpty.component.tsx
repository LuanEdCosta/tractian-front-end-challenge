import { useTranslation } from 'react-i18next'
import { PrecisionManufacturing } from '@mui/icons-material'

import { NoData } from 'src/components'

export function UsersEmpty() {
  const { t } = useTranslation('Users')

  return (
    <NoData
      message={t('emptyMessage')}
      IconComponent={PrecisionManufacturing}
    />
  )
}
