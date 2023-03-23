import { useQuery } from '@tanstack/react-query'

import { useNotify } from 'src/hooks'
import { QueryKeyUtils } from 'src/utils'
import { UserService } from 'src/services'

export function useUsers() {
  const { handleNotify } = useNotify('user')

  const { data, isLoading } = useQuery(
    QueryKeyUtils.findMany('User'),
    () => UserService.findMany({}, {}),
    {
      onError() {
        handleNotify('error', { t: 'findMany' })
      },
    },
  )

  return {
    users: data?.users || [],
    isLoadingUsers: isLoading,
  }
}

export type UseUsersReturn = ReturnType<typeof useUsers>
