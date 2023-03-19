import { People } from '@mui/icons-material'
import { useTranslation } from 'react-i18next'

import { NoData } from 'src/components'

export function UsersEmpty() {
  const { t } = useTranslation('Users')

  return <NoData message={t('emptyMessage')} IconComponent={People} />
}
