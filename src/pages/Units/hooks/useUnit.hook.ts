import { useQuery } from '@tanstack/react-query'

import { useNotify } from 'src/hooks'
import { QueryKeyUtils } from 'src/utils'
import { UnitService } from 'src/services'
import { UnitFilters, PaginationParams } from 'src/types'

export function useUnits(
  pagination: PaginationParams,
  currentFilters: UnitFilters,
) {
  const { handleNotify } = useNotify('unit')

  const { data, isLoading } = useQuery(
    QueryKeyUtils.findMany('Unit', pagination, currentFilters),
    () => UnitService.findMany(pagination, currentFilters),
    {
      onError() {
        handleNotify('error', { t: 'findMany' })
      },
    },
  )

  return {
    units: data?.units || [],
    isLoadingUnits: isLoading,
    totalUnits: data?.total || 0,
  }
}

export type UseUnitsReturn = ReturnType<typeof useUnits>
