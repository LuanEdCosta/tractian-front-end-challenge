import { useTranslation } from 'react-i18next'

import { FunctionUtils } from 'src/utils'
import { AlertDialog } from 'src/components'

import { UseDeleteUnitReturn } from '../hooks/useDeleteUnit.hook'
import { UseUnitActionsReturn } from '../hooks/useUnitActions.hook'

type DeleteUnitModalProps = Pick<
  UseUnitActionsReturn,
  'isDeleteModalOpen' | 'handleCloseDeleteModal' | 'handleHideAnchor'
> &
  Pick<UseDeleteUnitReturn, 'handleDeleteUnit'>

export function DeleteUnitModal({
  isDeleteModalOpen,
  handleHideAnchor,
  handleDeleteUnit,
  handleCloseDeleteModal,
}: DeleteUnitModalProps) {
  const { t } = useTranslation(['Units', 'Glossary'])

  return (
    <AlertDialog
      open={isDeleteModalOpen}
      confirmButtonColor="error"
      title={t('deleteModal.title')}
      message={t('deleteModal.message')}
      confirmButtonText={t('Glossary:delete')}
      cancelButtonText={t('Glossary:cancel')}
      handleConfirm={handleDeleteUnit}
      handleClose={FunctionUtils.composeFn(
        handleCloseDeleteModal,
        handleHideAnchor,
      )}
    />
  )
}
