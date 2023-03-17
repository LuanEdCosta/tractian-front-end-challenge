import axios from 'axios'

import { AssetModel } from 'src/models'
import { PaginationUtils } from 'src/utils'
import { PaginationParams } from 'src/types'

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/assets`,
})

export async function findMany({ page, pageSize }: PaginationParams) {
  const params = PaginationUtils.getPaginationParams({ page, pageSize })
  const { data, headers } = await api.get<AssetModel[]>(`?${params}`)

  return {
    assets: data,
    total: PaginationUtils.getTotalFromHeaders(headers),
  }
}

export async function deleteById(id: number) {
  const response = await api.delete<AssetModel>(`/${id}`)
  return response.data
}
