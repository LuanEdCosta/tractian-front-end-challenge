import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { WorkOrderFilters } from 'src/types'

type UseFiltersParams = {
  handleResetPage: () => void
}

export function useFilters({ handleResetPage }: UseFiltersParams) {
  const { register, handleSubmit, getValues } = useForm<WorkOrderFilters>()
  const [currentFilters, setCurrentFilters] = useState<WorkOrderFilters>({})

  function handleSearch() {
    const { search } = getValues()
    const searchTrimmed = search?.trim()
    setCurrentFilters({ search: searchTrimmed })
    handleResetPage()
  }

  return {
    currentFilters,
    register,
    handleSubmit,
    handleSearch,
  }
}

export type UseFiltersReturn = ReturnType<typeof useFilters>
