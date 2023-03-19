type Status = 'completed' | 'in progress'
type Priority = 'high'

export type WorkOrderModel = {
  id: number
  assetId: number
  assignedUserIds: number[]

  title: string
  status: Status
  priority: Priority
  description: string

  checklist: {
    completed: boolean
    task: string
  }[]
}
