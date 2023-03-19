import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'

import { useNotify } from 'src/hooks'
import { UnitService } from 'src/services'

import { UnitFormData } from '../CreateUnit.types'

import { UseUnitFormReturn } from './useUnitForm.hook'

type UseSaveUnitParams = {
  id: number
  isUpdating: boolean
  getValues: UseUnitFormReturn['getValues']
}

export function useSaveUnit({ id, isUpdating, getValues }: UseSaveUnitParams) {
  const navigate = useNavigate()
  const { handleNotify } = useNotify('unit')

  const mutation = useMutation(
    (data: UnitFormData) => {
      if (isUpdating) return UnitService.update(id, data)
      return UnitService.create(data)
    },
    {
      onSuccess() {
        handleNotify('success', { t: isUpdating ? 'update' : 'create' })
        navigate('/units')
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

export type UseSaveUnitReturn = ReturnType<typeof useSaveUnit>
