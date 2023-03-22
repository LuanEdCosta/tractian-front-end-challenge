import axios from 'axios'

import { AssetModel } from 'src/models'
import { PaginationUtils } from 'src/utils'
import { AssetFilters, PaginationParams } from 'src/types'

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/assets`,
})

export async function findMany(
  { page, pageSize }: PaginationParams,
  { search }: AssetFilters,
) {
  const params = PaginationUtils.getPaginationParams({ page, pageSize })
  if (search) params.append('q', search)

  const { data, headers } = await api.get<AssetModel[]>(`?${params}`)

  return {
    assets: data,
    total: PaginationUtils.getTotalFromHeaders(headers),
  }
}

export async function findById(id: number) {
  const response = await api.get<AssetModel>(`${id}`)
  return response.data
}

export async function deleteById(id: number) {
  const response = await api.delete<AssetModel>(`${id}`)
  return response.data
}

export async function create(data: Pick<AssetModel, 'name'>) {
  const response = await api.post<AssetModel>('/', data)
  return response.data
}

export async function update(
  id: number,
  data: Omit<
    AssetModel,
    | 'id'
    | 'healthscore'
    | 'healthHistory'
    | 'metrics'
    | 'image'
    | 'specifications'
  >,
) {
  const response = await api.patch<AssetModel>(`${id}`, data)
  return response.data
}
