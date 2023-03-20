import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { zodResolver } from '@hookform/resolvers/zod'

import { CompanyFormData } from '../CreateCompany.types'

export function useCompanyForm() {
  const { t } = useTranslation('Validation')

  const schema = z.object({
    name: z.string().nonempty(String(t('emptyField'))),
  })

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<CompanyFormData>({ resolver: zodResolver(schema) })

  return {
    errors,
    register,
    setValue,
    getValues,
    handleSubmit,
  }
}

export type UseCompanyFormReturn = ReturnType<typeof useCompanyForm>
