import { InAlertChip } from './chips/InAlertChip.component'
import { CompletedChip } from './chips/CompletedChip.component'
import { InProgressChip } from './chips/InProgressChip.component'
import { InDowntimeChip } from './chips/InDowntimeChip.component'
import { InOperationChip } from './chips/InOperationChip.component'
import { UnplannedStopChip } from './chips/UnplannedStopChip.component'

export const StatusChips = {
  InAlert: InAlertChip,
  Completed: CompletedChip,
  InProgress: InProgressChip,
  InDowntime: InDowntimeChip,
  InOperation: InOperationChip,
  UnplannedStop: UnplannedStopChip,
}
