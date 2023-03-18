import { useTranslation } from 'react-i18next'

import { DataGroup } from 'src/components'

export function AssetDetailsMetrics() {
  const { t } = useTranslation('AssetDetails')

  return <DataGroup title={t('metrics.title')}>Hello</DataGroup>
}
