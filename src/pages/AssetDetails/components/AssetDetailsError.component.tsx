import { useTranslation } from 'react-i18next'
import { PrecisionManufacturing } from '@mui/icons-material'
import { Stack } from '@mui/system'

import { NoData } from 'src/components'

export function AssetDetailsError() {
  const { t } = useTranslation('AssetDetails')

  return (
    <Stack flex={1} justifyContent="center" alignItems="center">
      <NoData message={t('loadError')} IconComponent={PrecisionManufacturing} />
    </Stack>
  )
}
