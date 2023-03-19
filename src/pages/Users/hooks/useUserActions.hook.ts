import { UserModel } from 'src/models'
import { useAnchor, useBoolean } from 'src/hooks'

export function useUserActions() {
  const { anchor, handleSetAnchor, handleHideAnchor } = useAnchor<UserModel>()

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

export type UseUserActionsReturn = ReturnType<typeof useUserActions>
