import { useTranslation } from 'react-i18next'

import { AlertDialog } from 'src/components'

import { UseDeleteAssetReturn } from '../hooks/useDeleteAsset.hook'

type DeleteAssetModalProps = Pick<
  UseDeleteAssetReturn,
  'isDeleteModalOpen' | 'handleCloseDeleteModal' | 'handleDeleteAsset'
>

export function DeleteAssetModal({
  isDeleteModalOpen,
  handleDeleteAsset,
  handleCloseDeleteModal,
}: DeleteAssetModalProps) {
  const { t } = useTranslation(['Assets', 'Glossary'])

  return (
    <AlertDialog
      open={isDeleteModalOpen}
      confirmButtonColor="error"
      title={t('deleteModal.title')}
      message={t('deleteModal.message')}
      confirmButtonText={t('Glossary:delete')}
      cancelButtonText={t('Glossary:cancel')}
      handleConfirm={handleDeleteAsset}
      handleClose={handleCloseDeleteModal}
    />
  )
}
