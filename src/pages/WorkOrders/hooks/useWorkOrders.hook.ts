import { useQuery } from '@tanstack/react-query'

import { useNotify } from 'src/hooks'
import { QueryKeyUtils } from 'src/utils'
import { WorkOrderService } from 'src/services'
import { WorkOrderFilters, PaginationParams } from 'src/types'

export function useWorkOrders(
  pagination: PaginationParams,
  currentFilters: WorkOrderFilters,
) {
  const { handleNotify } = useNotify('workOrder')

  const { data, isLoading } = useQuery(
    QueryKeyUtils.findMany('WorkOrder', pagination, currentFilters),
    () => WorkOrderService.findMany(pagination, currentFilters),
    {
      onError() {
        handleNotify('error', { t: 'findMany' })
      },
    },
  )

  return {
    workOrders: data?.workOrders || [],
    isLoadingWorkOrders: isLoading,
    totalWorkOrders: data?.total || 0,
  }
}

export type UseWorkOrdersReturn = ReturnType<typeof useWorkOrders>
