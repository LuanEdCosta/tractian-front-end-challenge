import { useMutation } from '@tanstack/react-query'

import { useNotify } from 'src/hooks'
import { AssetService } from 'src/services'

export function useDeleteAsset(id: number) {
  const { handleNotify } = useNotify('asset')

  const mutation = useMutation(AssetService.deleteById, {
    onSuccess() {
      handleNotify('success', { t: 'delete' })
    },
    onError() {
      handleNotify('error', { t: 'delete' })
    },
  })

  function handleDeleteAsset() {
    mutation.mutate(id)
  }

  return {
    handleDeleteAsset,
  }
}

export type UseDeleteAssetReturn = ReturnType<typeof useDeleteAsset>
