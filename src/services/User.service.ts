import axios from 'axios'

import { UserModel } from 'src/models'

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/users`,
})

export async function findMany() {
  const response = await api.get<UserModel[]>('/')
  return response.data
}
