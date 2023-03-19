import { Business } from '@mui/icons-material'
import { useTranslation } from 'react-i18next'

import { NoData } from 'src/components'

export function CompaniesEmpty() {
  const { t } = useTranslation('Companies')

  return <NoData message={t('emptyMessage')} IconComponent={Business} />
}
