import { useQuery } from '@tanstack/react-query'

import { useNotify } from 'src/hooks'
import { QueryKeyUtils } from 'src/utils'
import { UserService } from 'src/services'
import { UserFilters, PaginationParams } from 'src/types'

export function useUsers(
  pagination: PaginationParams,
  currentFilters: UserFilters,
) {
  const { handleNotify } = useNotify('user')

  const { data, isLoading } = useQuery(
    QueryKeyUtils.findMany('User', pagination, currentFilters),
    () => UserService.findMany(pagination, currentFilters),
    {
      onError() {
        handleNotify('error', { t: 'findMany' })
      },
    },
  )

  return {
    users: data?.users || [],
    isLoadingUsers: isLoading,
    totalUsers: data?.total || 0,
  }
}

export type UseUsersReturn = ReturnType<typeof useUsers>
