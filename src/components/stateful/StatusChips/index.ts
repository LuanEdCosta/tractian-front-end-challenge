import { InAlertChip } from './chips/InAlertChip.component'
import { CompletedChip } from './chips/CompletedChip.component'
import { InProgressChip } from './chips/InProgressChip.component'
import { InDowntimeChip } from './chips/InDowntimeChip.component'
import { InOperationChip } from './chips/InOperationChip.component'
import { PlannedStopChip } from './chips/PlannedStopChip.component'
import { UnplannedStopChip } from './chips/UnplannedStopChip.component'

export const StatusChips = {
  InAlert: InAlertChip,
  InDowntime: InDowntimeChip,
  InOperation: InOperationChip,
  PlannedStop: PlannedStopChip,
  UnplannedStop: UnplannedStopChip,

  Completed: CompletedChip,
  InProgress: InProgressChip,
}
