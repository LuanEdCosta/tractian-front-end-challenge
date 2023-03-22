import { WorkOrderModel } from 'src/models'

export type WorkOrderFormData = Omit<WorkOrderModel, 'id'>
