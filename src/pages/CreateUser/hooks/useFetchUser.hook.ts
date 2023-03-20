import { useQuery } from '@tanstack/react-query'

import { useNotify } from 'src/hooks'
import { QueryKeyUtils } from 'src/utils'
import { UserService } from 'src/services'

export function useFetchUser(id: number, isUpdating: boolean) {
  const { handleNotify } = useNotify('user')

  const { data, isFetching, isError } = useQuery(
    QueryKeyUtils.findById('User', id),
    () => UserService.findById(id),
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
