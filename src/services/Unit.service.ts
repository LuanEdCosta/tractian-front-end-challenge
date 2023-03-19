import axios from 'axios'

import { UnitModel } from 'src/models'
import { PaginationUtils } from 'src/utils'
import { PaginationParams, UnitFilters } from 'src/types'

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/units`,
})

export async function findMany(
  { page, pageSize }: PaginationParams,
  { search }: UnitFilters,
) {
  const params = PaginationUtils.getPaginationParams({ page, pageSize })
  if (search) params.append('q', search)

  const { data, headers } = await api.get<UnitModel[]>(`?${params}`)

  return {
    units: data,
    total: PaginationUtils.getTotalFromHeaders(headers),
  }
}

export async function findById(id: number) {
  const response = await api.get<UnitModel>(`${id}`)
  return response.data
}

export async function deleteById(id: number) {
  const response = await api.delete<UnitModel>(`${id}`)
  return response.data
}

export async function create(data: Pick<UnitModel, 'name'>) {
  const response = await api.post<UnitModel>('/', data)
  return response.data
}

export async function update(id: number, data: Pick<UnitModel, 'name'>) {
  const response = await api.patch<UnitModel>(`${id}`, data)
  return response.data
}
