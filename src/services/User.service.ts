import axios from 'axios'

import { UserModel } from 'src/models'
import { PaginationUtils } from 'src/utils'
import { PaginationParams, UserFilters } from 'src/types'

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/users`,
})

export async function findMany(
  { page, pageSize }: PaginationParams,
  { search }: UserFilters,
) {
  const params = PaginationUtils.getPaginationParams({ page, pageSize })
  if (search) params.append('q', search)

  const { data, headers } = await api.get<UserModel[]>(`?${params}`)

  return {
    users: data,
    total: PaginationUtils.getTotalFromHeaders(headers),
  }
}

export async function deleteById(id: number) {
  const response = await api.delete<UserModel>(`${id}`)
  return response.data
}
