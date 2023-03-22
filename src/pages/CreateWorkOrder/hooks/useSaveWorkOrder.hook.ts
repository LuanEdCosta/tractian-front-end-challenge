import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'

import { useNotify } from 'src/hooks'
import { WorkOrderService } from 'src/services'

import { WorkOrderFormData } from '../CreateWorkOrder.types'

import { UseWorkOrderFormReturn } from './useWorkOrderForm.hook'

type UseSaveWorkOrderParams = {
  id: number
  isUpdating: boolean
  getValues: UseWorkOrderFormReturn['getValues']
}

export function useSaveWorkOrder({
  id,
  isUpdating,
  getValues,
}: UseSaveWorkOrderParams) {
  const navigate = useNavigate()
  const { handleNotify } = useNotify('workOrder')

  const mutation = useMutation(
    (data: WorkOrderFormData) => {
      if (isUpdating) return WorkOrderService.update(id, data)
      return WorkOrderService.create(data)
    },
    {
      onSuccess() {
        handleNotify('success', { t: isUpdating ? 'update' : 'create' })
        navigate('/workOrders')
      },
      onError() {
        handleNotify('error', { t: isUpdating ? 'update' : 'create' })
      },
    },
  )

  function handleSave() {
    const data = getValues()
    mutation.mutate(data)
  }

  return {
    isSaving: mutation.isLoading,
    handleSave,
  }
}

export type UseSaveWorkOrderReturn = ReturnType<typeof useSaveWorkOrder>
