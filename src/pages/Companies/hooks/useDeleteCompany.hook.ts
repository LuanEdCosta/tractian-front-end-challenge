import { useMutation } from '@tanstack/react-query'

import { useNotify } from 'src/hooks'
import { CompanyService } from 'src/services'

export function useDeleteCompany(id: number) {
  const { handleNotify } = useNotify('company')

  const mutation = useMutation(CompanyService.deleteById, {
    onSuccess() {
      handleNotify('success', { t: 'delete' })
    },
    onError() {
      handleNotify('error', { t: 'delete' })
    },
  })

  function handleDeleteCompany() {
    mutation.mutate(id)
  }

  return {
    handleDeleteCompany,
  }
}

export type UseDeleteCompanyReturn = ReturnType<typeof useDeleteCompany>
