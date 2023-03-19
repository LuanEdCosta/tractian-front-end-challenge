import { WorkOrderModel } from 'src/models'
import { useAnchor, useBoolean } from 'src/hooks'

export function useWorkOrderActions() {
  const { anchor, handleSetAnchor, handleHideAnchor } =
    useAnchor<WorkOrderModel>()

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

export type UseWorkOrderActionsReturn = ReturnType<typeof useWorkOrderActions>
