import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowBack } from '@mui/icons-material'
import { Button, Stack, Typography } from '@mui/material'

import { PageLayout } from 'src/components'

export function NotFoundPage() {
  const { t } = useTranslation('NotFound')
  const navigate = useNavigate()

  function handleGoBackToHome() {
    navigate('/')
  }

  return (
    <PageLayout.Container alignItems="center" justifyContent="center">
      <Stack
        p={4}
        width="100%"
        maxWidth="sm"
        bgcolor="white"
        borderRadius={4}
        border="1px solid"
        borderColor="grey.300"
      >
        <Typography variant="h6" fontWeight="bold" mb={1}>
          {t('title')}
        </Typography>

        <Typography color="text.secondary" mb={2}>
          {t('subtitle')}
        </Typography>

        <Button
          size="large"
          variant="contained"
          startIcon={<ArrowBack />}
          onClick={handleGoBackToHome}
          fullWidth
        >
          {t('backButton')}
        </Button>
      </Stack>
    </PageLayout.Container>
  )
}
