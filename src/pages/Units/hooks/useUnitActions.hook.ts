import { UnitModel } from 'src/models'
import { useAnchor, useBoolean } from 'src/hooks'

export function useUnitActions() {
  const { anchor, handleSetAnchor, handleHideAnchor } = useAnchor<UnitModel>()

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

export type UseUnitActionsReturn = ReturnType<typeof useUnitActions>
