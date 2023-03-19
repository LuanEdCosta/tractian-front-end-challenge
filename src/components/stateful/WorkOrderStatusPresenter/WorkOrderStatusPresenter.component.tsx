import { WorkOrderModel } from 'src/models'

import { StatusChips } from '../StatusChips'

type WorkOrderStatusPresenterProps = {
  status: WorkOrderModel['status']
}

export function WorkOrderStatusPresenter({
  status,
}: WorkOrderStatusPresenterProps) {
  switch (status) {
    case 'in progress':
      return <StatusChips.InProgress />
    case 'completed':
      return <StatusChips.Completed context="female" />
    default:
      return <>{status}</>
  }
}
