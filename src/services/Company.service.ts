import axios from 'axios'

import { CompanyModel } from 'src/models'
import { PaginationUtils } from 'src/utils'
import { PaginationParams, CompanyFilters } from 'src/types'

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/companies`,
})

export async function findMany(
  { page, pageSize }: PaginationParams,
  { search }: CompanyFilters,
) {
  const params = PaginationUtils.getPaginationParams({ page, pageSize })
  if (search) params.append('q', search)

  const { data, headers } = await api.get<CompanyModel[]>(`?${params}`)

  return {
    companies: data,
    total: PaginationUtils.getTotalFromHeaders(headers),
  }
}

export async function findById(id: number) {
  const response = await api.get<CompanyModel>(`${id}`)
  return response.data
}

export async function deleteById(id: number) {
  const response = await api.delete<CompanyModel>(`${id}`)
  return response.data
}

export async function create(data: Pick<CompanyModel, 'name'>) {
  const response = await api.post<CompanyModel>('/', data)
  return response.data
}

export async function update(id: number, data: Pick<CompanyModel, 'name'>) {
  const response = await api.patch<CompanyModel>(`${id}`, data)
  return response.data
}
