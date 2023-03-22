import { Link } from 'react-router-dom'
import { Add } from '@mui/icons-material'
import { Button, Stack } from '@mui/material'
import { useTranslation } from 'react-i18next'

export function AssetsPageActions() {
  const { t } = useTranslation('Assets')

  return (
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2 }}>
      <Button
        to="/assets/create"
        component={Link}
        endIcon={<Add />}
        variant="outlined"
      >
        {t('pageActions.newAsset')}
      </Button>
    </Stack>
  )
}
