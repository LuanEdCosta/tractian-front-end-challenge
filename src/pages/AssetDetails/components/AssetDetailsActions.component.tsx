import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Delete, Edit } from '@mui/icons-material'
import { Button, CircularProgress, Stack } from '@mui/material'

import { UseDeleteAssetReturn } from '../hooks/useDeleteAsset.hook'

type AssetDetailsActionsProps = Pick<
  UseDeleteAssetReturn,
  'handleOpenDeleteModal' | 'isDeletingAsset'
> & {
  id: string
}

export function AssetDetailsActions({
  id,
  isDeletingAsset,
  handleOpenDeleteModal,
}: AssetDetailsActionsProps) {
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

      <Button
        color="error"
        variant="contained"
        disabled={isDeletingAsset}
        onClick={handleOpenDeleteModal}
        endIcon={
          isDeletingAsset ? (
            <CircularProgress size="1rem" color="inherit" />
          ) : (
            <Delete />
          )
        }
      >
        {t('Glossary:delete')}
      </Button>
    </Stack>
  )
}
