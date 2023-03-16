import axios from 'axios'

import { WorkOrderModel } from 'src/models'

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/workorders`,
})

export async function findMany() {
  const response = await api.get<WorkOrderModel[]>('/')
  return response.data
}
