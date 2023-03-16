import { useQuery } from '@tanstack/react-query'

import { useNotify } from 'src/hooks'
import { QueryKeyUtils } from 'src/utils'
import { UnitService } from 'src/services'

export function useUnits() {
  const { handleNotify } = useNotify('unit')

  const { data, isLoading } = useQuery(
    QueryKeyUtils.findMany('Unit'),
    () => UnitService.findMany(),
    {
      onError() {
        handleNotify('error', { t: 'findMany' })
      },
    },
  )

  return {
    units: data || [],
    isLoadingUnits: isLoading,
  }
}

export type UseUnitsReturn = ReturnType<typeof useUnits>
