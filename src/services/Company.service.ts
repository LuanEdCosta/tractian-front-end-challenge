import axios from 'axios'

import { CompanyModel } from 'src/models'

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/companies`,
})

export async function findMany() {
  const response = await api.get<CompanyModel[]>('/')
  return response.data
}
