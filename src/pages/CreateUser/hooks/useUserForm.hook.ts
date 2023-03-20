import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { zodResolver } from '@hookform/resolvers/zod'

import { UserFormData } from '../CreateUser.types'

export function useUserForm() {
  const { t } = useTranslation('Validation')

  const schema = z.object({
    name: z.string().nonempty(String(t('emptyField'))),
    email: z
      .string()
      .nonempty(String(t('emptyField')))
      .email(String(t('invalidEmail'))),
  })

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<UserFormData>({ resolver: zodResolver(schema) })

  return {
    errors,
    register,
    setValue,
    getValues,
    handleSubmit,
  }
}

export type UseUserFormReturn = ReturnType<typeof useUserForm>
