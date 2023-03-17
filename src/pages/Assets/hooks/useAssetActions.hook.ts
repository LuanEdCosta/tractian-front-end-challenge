import { AssetModel } from 'src/models'
import { useAnchor, useBoolean } from 'src/hooks'

export function useAssetActions() {
  const { anchor, handleSetAnchor, handleHideAnchor } = useAnchor<AssetModel>()

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

export type UseAssetActionsReturn = ReturnType<typeof useAssetActions>
