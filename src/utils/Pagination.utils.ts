import { PaginationParams } from 'src/types'

export function getPaginationParams({
  page,
  pageSize,
}: Partial<PaginationParams>): URLSearchParams {
  const params = new URLSearchParams()
  if (page || page === 0) params.append('_page', String(page))
  if (pageSize || pageSize === 0) params.append('_limit', String(pageSize))
  return params
}

export function getTotalFromHeaders(headers: object): number {
  return (headers as never)?.['x-total-count'] ?? 0
}
