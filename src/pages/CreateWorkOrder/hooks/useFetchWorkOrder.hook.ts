import { useQuery } from '@tanstack/react-query'

import { useNotify } from 'src/hooks'
import { QueryKeyUtils } from 'src/utils'
import { WorkOrderService } from 'src/services'

export function useFetchWorkOrder(id: number, isUpdating: boolean) {
  const { handleNotify } = useNotify('workOrder')

  const { data, isFetching, isError } = useQuery(
    QueryKeyUtils.findById('WorkOrder', id),
    () => WorkOrderService.findById(id),
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
