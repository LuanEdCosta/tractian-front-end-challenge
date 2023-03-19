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

export async function deleteById(id: number) {
  const response = await api.delete<UnitModel>(`${id}`)
  return response.data
}
