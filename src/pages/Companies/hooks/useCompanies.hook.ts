import { useQuery } from '@tanstack/react-query'

import { useNotify } from 'src/hooks'
import { QueryKeyUtils } from 'src/utils'
import { CompanyService } from 'src/services'
import { CompanyFilters, PaginationParams } from 'src/types'

export function useCompanies(
  pagination: PaginationParams,
  currentFilters: CompanyFilters,
) {
  const { handleNotify } = useNotify('company')

  const { data, isLoading } = useQuery(
    QueryKeyUtils.findMany('Company', pagination, currentFilters),
    () => CompanyService.findMany(pagination, currentFilters),
    {
      onError() {
        handleNotify('error', { t: 'findMany' })
      },
    },
  )

  return {
    companies: data?.companies || [],
    isLoadingCompanies: isLoading,
    totalCompanies: data?.total || 0,
  }
}

export type UseCompaniesReturn = ReturnType<typeof useCompanies>
