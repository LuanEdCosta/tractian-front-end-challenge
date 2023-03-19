import { useMutation } from '@tanstack/react-query'

import { useNotify } from 'src/hooks'
import { UserService } from 'src/services'

export function useDeleteUser(id: number) {
  const { handleNotify } = useNotify('user')

  const mutation = useMutation(UserService.deleteById, {
    onSuccess() {
      handleNotify('success', { t: 'delete' })
    },
    onError() {
      handleNotify('error', { t: 'delete' })
    },
  })

  function handleDeleteUser() {
    mutation.mutate(id)
  }

  return {
    handleDeleteUser,
  }
}

export type UseDeleteUserReturn = ReturnType<typeof useDeleteUser>
