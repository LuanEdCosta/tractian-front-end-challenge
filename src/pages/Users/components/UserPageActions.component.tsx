import { Link } from 'react-router-dom'
import { Add } from '@mui/icons-material'
import { Button, Stack } from '@mui/material'
import { useTranslation } from 'react-i18next'

export function UserPageActions() {
  const { t } = useTranslation('Users')

  return (
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2 }}>
      <Button to="create" component={Link} endIcon={<Add />} variant="outlined">
        {t('pageActions.newUser')}
      </Button>
    </Stack>
  )
}
