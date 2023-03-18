import { AssetModel } from 'src/models'

import { StatusChips } from '../StatusChips'

type AssetStatusPresenterProps = {
  status: AssetModel['status']
}

export function AssetStatusPresenter({ status }: AssetStatusPresenterProps) {
  switch (status) {
    case 'inAlert':
      return <StatusChips.InAlert />
    case 'inDowntime':
      return <StatusChips.InDowntime />
    case 'inOperation':
      return <StatusChips.InOperation />
    case 'unplannedStop':
      return <StatusChips.UnplannedStop />
    default:
      return <>{status}</>
  }
}
