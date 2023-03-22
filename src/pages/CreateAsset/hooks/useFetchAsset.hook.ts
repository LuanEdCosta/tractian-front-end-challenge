import { useQuery } from '@tanstack/react-query'

import { useNotify } from 'src/hooks'
import { QueryKeyUtils } from 'src/utils'
import { AssetService } from 'src/services'

export function useFetchAsset(id: number, isUpdating: boolean) {
  const { handleNotify } = useNotify('asset')

  const { data, isFetching, isError } = useQuery(
    QueryKeyUtils.findById('Asset', id),
    () => AssetService.findById(id),
    {
      enabled: isUpdating,
      onError() {
        handleNotify('error', { t: 'findById' })
      },
    },
  )

  return {
    data,
    isError,
    isFetching,
  }
}
