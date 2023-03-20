import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'

import { useNotify } from 'src/hooks'
import { CompanyService } from 'src/services'

import { CompanyFormData } from '../CreateCompany.types'

import { UseCompanyFormReturn } from './useCompanyForm.hook'

type UseSaveCompanyParams = {
  id: number
  isUpdating: boolean
  getValues: UseCompanyFormReturn['getValues']
}

export function useSaveCompany({
  id,
  isUpdating,
  getValues,
}: UseSaveCompanyParams) {
  const navigate = useNavigate()
  const { handleNotify } = useNotify('company')

  const mutation = useMutation(
    (data: CompanyFormData) => {
      if (isUpdating) return CompanyService.update(id, data)
      return CompanyService.create(data)
    },
    {
      onSuccess() {
        handleNotify('success', { t: isUpdating ? 'update' : 'create' })
        navigate('/companies')
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

export type UseSaveCompanyReturn = ReturnType<typeof useSaveCompany>
