import axios from 'axios'

import { UnitModel } from 'src/models'

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/units`,
})

export async function findMany() {
  const response = await api.get<UnitModel[]>('/')
  return response.data
}
