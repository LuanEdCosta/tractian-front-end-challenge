import { ListAlt } from '@mui/icons-material'
import { useTranslation } from 'react-i18next'

import { NoData } from 'src/components'

export function WorkOrdersEmpty() {
  const { t } = useTranslation('WorkOrders')

  return <NoData message={t('emptyMessage')} IconComponent={ListAlt} />
}
