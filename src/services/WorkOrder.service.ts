import axios from 'axios'

import { WorkOrderModel } from 'src/models'
import { PaginationUtils } from 'src/utils'
import { PaginationParams, WorkOrderFilters } from 'src/types'

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/workorders`,
})

export async function findMany(
  { page, pageSize }: PaginationParams,
  { search }: WorkOrderFilters,
) {
  const params = PaginationUtils.getPaginationParams({ page, pageSize })
  if (search) params.append('q', search)

  const { data, headers } = await api.get<WorkOrderModel[]>(`?${params}`)

  return {
    workOrders: data,
    total: PaginationUtils.getTotalFromHeaders(headers),
  }
}

export async function deleteById(id: number) {
  const response = await api.delete<WorkOrderModel>(`${id}`)
  return response.data
}
