import { useQuery } from '@tanstack/react-query'

import { useNotify } from 'src/hooks'
import { QueryKeyUtils } from 'src/utils'
import { AssetService } from 'src/services'

export function useAsset(id: number) {
  const { handleNotify } = useNotify('asset')

  const { data, isLoading } = useQuery(
    QueryKeyUtils.findById('Asset', id),
    () => AssetService.findById(id),
    {
      onError() {
        handleNotify('error', { t: 'findById' })
      },
    },
  )

  return {
    asset: data,
    isLoadingAsset: isLoading,
  }
}

export type UseAssetReturn = ReturnType<typeof useAsset>
