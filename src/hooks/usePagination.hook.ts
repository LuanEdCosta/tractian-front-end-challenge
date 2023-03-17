import { useCallback, useState } from 'react'

export function usePagination(initialPageNumber: number) {
  const [page, setPage] = useState(initialPageNumber)

  const handleResetPage = useCallback(() => {
    setPage(initialPageNumber)
  }, [initialPageNumber])

  return {
    page,
    setPage,
    handleResetPage,
  }
}
