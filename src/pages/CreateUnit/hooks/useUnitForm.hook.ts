import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { zodResolver } from '@hookform/resolvers/zod'

import { UnitFormData } from '../CreateUnit.types'

export function useUnitForm() {
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
  } = useForm<UnitFormData>({ resolver: zodResolver(schema) })

  return {
    errors,
    register,
    setValue,
    getValues,
    handleSubmit,
  }
}

export type UseUnitFormReturn = ReturnType<typeof useUnitForm>
