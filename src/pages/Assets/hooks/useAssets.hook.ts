import { useQuery } from '@tanstack/react-query'

import { useNotify } from 'src/hooks'
import { QueryKeyUtils } from 'src/utils'
import { AssetService } from 'src/services'

export function useAssets() {
  const { handleNotify } = useNotify('asset')

  const { data, isLoading } = useQuery(
    QueryKeyUtils.findMany('Asset'),
    () => AssetService.findMany(),
    {
      onError() {
        handleNotify('error', { t: 'findMany' })
      },
    },
  )

  return {
    assets: data || [],
    isLoadingAssets: isLoading,
  }
}

export type UseAssetsReturn = ReturnType<typeof useAssets>
