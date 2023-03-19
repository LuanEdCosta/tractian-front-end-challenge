import { useMutation } from '@tanstack/react-query'

import { useNotify } from 'src/hooks'
import { UnitService } from 'src/services'

export function useDeleteUnit(id: number) {
  const { handleNotify } = useNotify('unit')

  const mutation = useMutation(UnitService.deleteById, {
    onSuccess() {
      handleNotify('success', { t: 'delete' })
    },
    onError() {
      handleNotify('error', { t: 'delete' })
    },
  })

  function handleDeleteUnit() {
    mutation.mutate(id)
  }

  return {
    handleDeleteUnit,
  }
}

export type UseDeleteUnitReturn = ReturnType<typeof useDeleteUnit>
