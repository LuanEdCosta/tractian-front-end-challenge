import axios from 'axios'

import { AssetModel } from 'src/models'

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/assets`,
})

export async function findMany() {
  const response = await api.get<AssetModel[]>('/')
  return response.data
}
