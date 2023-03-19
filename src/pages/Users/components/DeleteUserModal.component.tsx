import { useTranslation } from 'react-i18next'

import { FunctionUtils } from 'src/utils'
import { AlertDialog } from 'src/components'

import { UseDeleteUserReturn } from '../hooks/useDeleteUser.hook'
import { UseUserActionsReturn } from '../hooks/useUserActions.hook'

type DeleteUserModalProps = Pick<
  UseUserActionsReturn,
  'isDeleteModalOpen' | 'handleCloseDeleteModal' | 'handleHideAnchor'
> &
  Pick<UseDeleteUserReturn, 'handleDeleteUser'>

export function DeleteUserModal({
  isDeleteModalOpen,
  handleHideAnchor,
  handleDeleteUser,
  handleCloseDeleteModal,
}: DeleteUserModalProps) {
  const { t } = useTranslation(['Users', 'Glossary'])

  return (
    <AlertDialog
      open={isDeleteModalOpen}
      confirmButtonColor="error"
      title={t('deleteModal.title')}
      message={t('deleteModal.message')}
      confirmButtonText={t('Glossary:delete')}
      cancelButtonText={t('Glossary:cancel')}
      handleConfirm={handleDeleteUser}
      handleClose={FunctionUtils.composeFn(
        handleCloseDeleteModal,
        handleHideAnchor,
      )}
    />
  )
}
