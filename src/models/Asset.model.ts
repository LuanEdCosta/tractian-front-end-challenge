type Status = 'inOperation' | 'inDowntime' | 'inAlert' | 'unplannedStop'

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
    lastUptimeAt: string
    totalCollectsUptime: number
    totalUptime: number
  }

  specifications: {
    maxTemp: number
  }
}
