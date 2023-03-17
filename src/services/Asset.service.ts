import axios from 'axios'

import { AssetModel } from 'src/models'

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/assets`,
})

export async function findMany() {
  const response = await api.get<AssetModel[]>('/')
  return response.data
}

export async function deleteById(id: number) {
  const response = await api.delete<AssetModel>(`/${id}`)
  return response.data
}
