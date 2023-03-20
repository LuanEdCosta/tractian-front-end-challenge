import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'

import { AssetService } from 'src/services'
import { useBoolean, useNotify } from 'src/hooks'

export function useDeleteAsset(id: number) {
  const { handleNotify } = useNotify('asset')
  const navigate = useNavigate()

  const [
    // .
    isDeleteModalOpen,
    handleOpenDeleteModal,
    handleCloseDeleteModal,
  ] = useBoolean()

  const { mutate, isLoading } = useMutation(AssetService.deleteById, {
    onSuccess() {
      handleNotify('success', { t: 'delete' })
      navigate('/')
    },
    onError() {
      handleNotify('error', { t: 'delete' })
    },
  })

  function handleDeleteAsset() {
    mutate(id)
  }

  return {
    isDeleteModalOpen,
    isDeletingAsset: isLoading,
    handleDeleteAsset,
    handleOpenDeleteModal,
    handleCloseDeleteModal,
  }
}

export type UseDeleteAssetReturn = ReturnType<typeof useDeleteAsset>
