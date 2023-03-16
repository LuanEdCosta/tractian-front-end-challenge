export type WorkOrderModel = {
  id: number
  assetId: number
  assignedUserIds: number[]

  title: string
  status: string
  priority: string
  description: string

  checklist: {
    completed: boolean
    task: string
  }[]
}
