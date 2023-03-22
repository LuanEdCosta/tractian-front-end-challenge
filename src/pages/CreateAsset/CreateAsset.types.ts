import { AssetModel } from 'src/models'

export type AssetFormData = Omit<
  AssetModel,
  | 'id'
  | 'healthscore'
  | 'healthHistory'
  | 'metrics'
  | 'image'
  | 'specifications'
>
