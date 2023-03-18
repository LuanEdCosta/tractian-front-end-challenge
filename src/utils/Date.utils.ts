import { format as dateFnsFormat } from 'date-fns'

export const format = (date: number | Date, dateFormat: string): string => {
  return dateFnsFormat(date, dateFormat)
}
