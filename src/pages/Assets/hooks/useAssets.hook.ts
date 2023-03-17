import { useQuery } from '@tanstack/react-query'

import { useNotify } from 'src/hooks'
import { QueryKeyUtils } from 'src/utils'
import { AssetService } from 'src/services'
import { PaginationParams } from 'src/types'

export function useAssets(pagination: PaginationParams) {
  const { handleNotify } = useNotify('asset')

  const { data, isLoading } = useQuery(
    QueryKeyUtils.findMany('Asset', pagination),
    () => AssetService.findMany(pagination),
    {
      onError() {
        handleNotify('error', { t: 'findMany' })
      },
    },
  )

  return {
    assets: data?.assets || [],
    isLoadingAssets: isLoading,
    totalAssets: data?.total || 0,
  }
}

export type UseAssetsReturn = ReturnType<typeof useAssets>
