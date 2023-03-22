import { Stack } from '@mui/material'
import { Groups } from '@mui/icons-material'
import { useTranslation } from 'react-i18next'

import { NoData } from 'src/components'

export function AssetFormPlaceholder() {
  const { t } = useTranslation('CreateAsset')

  return (
    <Stack flex={1} alignItems="center" justifyContent="center">
      <NoData message={t('loadError')} IconComponent={Groups} />
    </Stack>
  )
}
