import { useQuery } from '@tanstack/react-query'

import { useNotify } from 'src/hooks'
import { QueryKeyUtils } from 'src/utils'
import { CompanyService } from 'src/services'

export function useFetchCompany(id: number, isUpdating: boolean) {
  const { handleNotify } = useNotify('company')

  const { data, isFetching, isError } = useQuery(
    QueryKeyUtils.findById('Company', id),
    () => CompanyService.findById(id),
    {
      enabled: isUpdating,
      onError() {
        handleNotify('error', { t: 'findById' })
      },
    },
  )

  return {
    data,
    isError,
    isFetching,
  }
}
