type Status =
  | 'inAlert'
  | 'inDowntime'
  | 'inOperation'
  | 'plannedStop'
  | 'unplannedStop'

export type AssetModel = {
  id: number
  unitId: number
  companyId: number
  assignedUserIds: number[]

  name: string
  image: string
  model: string
  status: Status
  healthscore: number
  sensors: string[]

  healthHistory: {
    status: Status
    timestamp: string
  }[]

  metrics: {
    totalUptime: number
    lastUptimeAt: string
    totalCollectsUptime: number
  }

  specifications: {
    rpm?: number
    power?: number
    maxTemp: number
  }
}
