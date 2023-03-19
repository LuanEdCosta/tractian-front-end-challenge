import { useQuery } from '@tanstack/react-query'

import { useNotify } from 'src/hooks'
import { QueryKeyUtils } from 'src/utils'
import { UnitService } from 'src/services'

export function useFetchUnit(id: number, isUpdating: boolean) {
  const { handleNotify } = useNotify('unit')

  const { data, isFetching, isError } = useQuery(
    QueryKeyUtils.findById('Unit', id),
    () => UnitService.findById(id),
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
