import { useState } from 'react'

import { WorkOrderModel } from 'src/models'

export function useTasksModal() {
  const [selectedWorkOrder, setSelectedWorkOrder] =
    useState<WorkOrderModel | null>(null)

  const [isShowingTasksModal, setIsShowingTasksModal] = useState(false)

  function handleOpenTasksModal(workOrder: WorkOrderModel) {
    setSelectedWorkOrder(workOrder)
    setIsShowingTasksModal(true)
  }

  function handleCloseTasksModal() {
    setIsShowingTasksModal(false)
  }

  return {
    isShowingTasksModal,
    tasks: selectedWorkOrder?.checklist || [],
    workOrderTile: selectedWorkOrder?.title || '',
    handleOpenTasksModal,
    handleCloseTasksModal,
  }
}

export type UseTasksModalReturn = ReturnType<typeof useTasksModal>
