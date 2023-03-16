import { useQuery } from '@tanstack/react-query'

import { useNotify } from 'src/hooks'
import { QueryKeyUtils } from 'src/utils'
import { CompanyService } from 'src/services'

export function useCompanies() {
  const { handleNotify } = useNotify('company')

  const { data, isLoading } = useQuery(
    QueryKeyUtils.findMany('Asset'),
    () => CompanyService.findMany(),
    {
      onError() {
        handleNotify('error', { t: 'findMany' })
      },
    },
  )

  return {
    companies: data || [],
    isLoadingCompanies: isLoading,
  }
}

export type UseCompaniesReturn = ReturnType<typeof useCompanies>
