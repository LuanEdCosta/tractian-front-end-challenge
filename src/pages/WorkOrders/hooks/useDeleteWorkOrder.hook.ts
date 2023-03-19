import { useMutation } from '@tanstack/react-query'

import { useNotify } from 'src/hooks'
import { WorkOrderService } from 'src/services'

export function useDeleteWorkOrder(id: number) {
  const { handleNotify } = useNotify('workOrder')

  const mutation = useMutation(WorkOrderService.deleteById, {
    onSuccess() {
      handleNotify('success', { t: 'delete' })
    },
    onError() {
      handleNotify('error', { t: 'delete' })
    },
  })

  function handleDeleteWorkOrder() {
    mutation.mutate(id)
  }

  return {
    handleDeleteWorkOrder,
  }
}

export type UseDeleteWorkOrderReturn = ReturnType<typeof useDeleteWorkOrder>
