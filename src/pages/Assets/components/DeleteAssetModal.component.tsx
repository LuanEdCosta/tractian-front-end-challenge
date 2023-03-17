import { useTranslation } from 'react-i18next'

import { FunctionUtils } from 'src/utils'
import { AlertDialog } from 'src/components'

import { UseDeleteAssetReturn } from '../hooks/useDeleteAsset.hook'
import { UseAssetActionsReturn } from '../hooks/useAssetActions.hook'

type DeleteAssetModalProps = Pick<
  UseAssetActionsReturn,
  'isDeleteModalOpen' | 'handleCloseDeleteModal' | 'handleHideAnchor'
> &
  Pick<UseDeleteAssetReturn, 'handleDeleteAsset'>

export function DeleteAssetModal({
  isDeleteModalOpen,
  handleHideAnchor,
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
      handleClose={FunctionUtils.composeFn(
        handleCloseDeleteModal,
        handleHideAnchor,
      )}
    />
  )
}
