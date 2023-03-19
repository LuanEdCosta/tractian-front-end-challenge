import { CompanyModel } from 'src/models'
import { useAnchor, useBoolean } from 'src/hooks'

export function useCompanyActions() {
  const { anchor, handleSetAnchor, handleHideAnchor } =
    useAnchor<CompanyModel>()

  const [
    // .
    isDeleteModalOpen,
    handleOpenDeleteModal,
    handleCloseDeleteModal,
  ] = useBoolean()

  return {
    anchor,
    isDeleteModalOpen,
    handleSetAnchor,
    handleHideAnchor,
    handleOpenDeleteModal,
    handleCloseDeleteModal,
  }
}

export type UseCompanyActionsReturn = ReturnType<typeof useCompanyActions>
