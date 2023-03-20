import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'

import { useNotify } from 'src/hooks'
import { UserService } from 'src/services'

import { UserFormData } from '../CreateUser.types'

import { UseUserFormReturn } from './useUserForm.hook'

type UseSaveUserParams = {
  id: number
  isUpdating: boolean
  getValues: UseUserFormReturn['getValues']
}

export function useSaveUser({ id, isUpdating, getValues }: UseSaveUserParams) {
  const navigate = useNavigate()
  const { handleNotify } = useNotify('user')

  const mutation = useMutation(
    (data: UserFormData) => {
      if (isUpdating) return UserService.update(id, data)
      return UserService.create(data)
    },
    {
      onSuccess() {
        handleNotify('success', { t: isUpdating ? 'update' : 'create' })
        navigate('/users')
      },
      onError() {
        handleNotify('error', { t: isUpdating ? 'update' : 'create' })
      },
    },
  )

  function handleSave() {
    const data = getValues()
    mutation.mutate(data)
  }

  return {
    isSaving: mutation.isLoading,
    handleSave,
  }
}

export type UseSaveUserReturn = ReturnType<typeof useSaveUser>
