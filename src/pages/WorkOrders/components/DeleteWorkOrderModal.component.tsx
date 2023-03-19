import { useTranslation } from 'react-i18next'

import { FunctionUtils } from 'src/utils'
import { AlertDialog } from 'src/components'

import { UseDeleteWorkOrderReturn } from '../hooks/useDeleteWorkOrder.hook'
import { UseWorkOrderActionsReturn } from '../hooks/useWorkOrderActions.hook'

type DeleteWorkOrderModalProps = Pick<
  UseWorkOrderActionsReturn,
  'isDeleteModalOpen' | 'handleCloseDeleteModal' | 'handleHideAnchor'
> &
  Pick<UseDeleteWorkOrderReturn, 'handleDeleteWorkOrder'>

export function DeleteWorkOrderModal({
  isDeleteModalOpen,
  handleHideAnchor,
  handleDeleteWorkOrder,
  handleCloseDeleteModal,
}: DeleteWorkOrderModalProps) {
  const { t } = useTranslation(['WorkOrders', 'Glossary'])

  return (
    <AlertDialog
      open={isDeleteModalOpen}
      confirmButtonColor="error"
      title={t('deleteModal.title')}
      message={t('deleteModal.message')}
      confirmButtonText={t('Glossary:delete')}
      cancelButtonText={t('Glossary:cancel')}
      handleConfirm={handleDeleteWorkOrder}
      handleClose={FunctionUtils.composeFn(
        handleCloseDeleteModal,
        handleHideAnchor,
      )}
    />
  )
}
