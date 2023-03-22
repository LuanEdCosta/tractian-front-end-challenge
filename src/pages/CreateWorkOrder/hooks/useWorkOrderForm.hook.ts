import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { zodResolver } from '@hookform/resolvers/zod'

import { WorkOrderFormData } from '../CreateWorkOrder.types'

export function useWorkOrderForm() {
  const { t } = useTranslation('Validation')

  const schema = z.object({
    title: z.string().nonempty(String(t('emptyField'))),
    description: z.string().nonempty(String(t('emptyField'))),
    priority: z.string().nonempty(String(t('emptyField'))),
    status: z.string().nonempty(String(t('emptyField'))),
  })

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<WorkOrderFormData>({ resolver: zodResolver(schema) })

  return {
    errors,
    register,
    setValue,
    getValues,
    handleSubmit,
  }
}

export type UseWorkOrderFormReturn = ReturnType<typeof useWorkOrderForm>
