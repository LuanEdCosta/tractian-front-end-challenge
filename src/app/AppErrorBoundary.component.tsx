import { Refresh } from '@mui/icons-material'
import { useTranslation } from 'react-i18next'
import { Button, Stack, Typography } from '@mui/material'
import { ErrorBoundary, FallbackProps } from 'react-error-boundary'

function FallbackComponent({ error, resetErrorBoundary }: FallbackProps) {
  const { t } = useTranslation('Common')

  return (
    <Stack
      p={2}
      flex={1}
      bgcolor="grey.50"
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
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
          {t('errorOcurred')}
        </Typography>

        <Typography color="text.secondary" mb={2}>
          {error.message}
        </Typography>

        <Button
          size="large"
          variant="contained"
          endIcon={<Refresh />}
          onClick={resetErrorBoundary}
          fullWidth
        >
          {t('reloadPage')}
        </Button>
      </Stack>
    </Stack>
  )
}

type AppErrorBoundaryProps = {
  children: React.ReactNode
}

export function AppErrorBoundary({ children }: AppErrorBoundaryProps) {
  return (
    <ErrorBoundary
      fallbackRender={({ error, resetErrorBoundary }) => (
        <FallbackComponent
          error={error}
          resetErrorBoundary={resetErrorBoundary}
        />
      )}
    >
      {children}
    </ErrorBoundary>
  )
}
