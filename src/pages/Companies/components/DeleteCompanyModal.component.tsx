import { useTranslation } from 'react-i18next'

import { FunctionUtils } from 'src/utils'
import { AlertDialog } from 'src/components'

import { UseDeleteCompanyReturn } from '../hooks/useDeleteCompany.hook'
import { UseCompanyActionsReturn } from '../hooks/useCompanyActions.hook'

type DeleteCompanyModalProps = Pick<
  UseCompanyActionsReturn,
  'isDeleteModalOpen' | 'handleCloseDeleteModal' | 'handleHideAnchor'
> &
  Pick<UseDeleteCompanyReturn, 'handleDeleteCompany'>

export function DeleteCompanyModal({
  isDeleteModalOpen,
  handleHideAnchor,
  handleDeleteCompany,
  handleCloseDeleteModal,
}: DeleteCompanyModalProps) {
  const { t } = useTranslation(['Companies', 'Glossary'])

  return (
    <AlertDialog
      open={isDeleteModalOpen}
      confirmButtonColor="error"
      title={t('deleteModal.title')}
      message={t('deleteModal.message')}
      confirmButtonText={t('Glossary:delete')}
      cancelButtonText={t('Glossary:cancel')}
      handleConfirm={handleDeleteCompany}
      handleClose={FunctionUtils.composeFn(
        handleCloseDeleteModal,
        handleHideAnchor,
      )}
    />
  )
}
