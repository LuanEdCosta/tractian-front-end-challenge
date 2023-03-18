import { Link } from 'react-router-dom'
import { Button, Stack } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Delete, Edit } from '@mui/icons-material'

type AssetDetailsActionsProps = {
  id: string
}

export function AssetDetailsActions({ id }: AssetDetailsActionsProps) {
  const { t } = useTranslation('AssetDetails')

  return (
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2 }}>
      <Button
        component={Link}
        to={`/edit/${id}`}
        endIcon={<Edit />}
        variant="contained"
      >
        {t('Glossary:edit')}
      </Button>

      <Button variant="contained" color="error" endIcon={<Delete />}>
        {t('Glossary:delete')}
      </Button>
    </Stack>
  )
}
