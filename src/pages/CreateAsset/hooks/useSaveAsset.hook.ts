import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'

import { useNotify } from 'src/hooks'
import { AssetService } from 'src/services'

import { AssetFormData } from '../CreateAsset.types'

import { UseAssetFormReturn } from './useAssetForm.hook'

type UseSaveAssetParams = {
  id: number
  isUpdating: boolean
  getValues: UseAssetFormReturn['getValues']
}

export function useSaveAsset({
  id,
  isUpdating,
  getValues,
}: UseSaveAssetParams) {
  const navigate = useNavigate()
  const { handleNotify } = useNotify('asset')

  const mutation = useMutation(
    (data: AssetFormData) => {
      if (isUpdating) return AssetService.update(id, data)
      return AssetService.create(data)
    },
    {
      onSuccess() {
        handleNotify('success', { t: isUpdating ? 'update' : 'create' })
        navigate('/')
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

export type UseSaveAssetReturn = ReturnType<typeof useSaveAsset>
