import { useMemo } from 'react'

export function useNumberOfPages(total: number, pageSize: number) {
  const numberOfPages = useMemo(() => {
    if (total === 0) return 1
    return Math.ceil(total / pageSize)
  }, [pageSize, total])

  return {
    numberOfPages,
  }
}
