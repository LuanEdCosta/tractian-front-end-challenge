import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { zodResolver } from '@hookform/resolvers/zod'

import { AssetFormData } from '../CreateAsset.types'

export function useAssetForm() {
  const { t } = useTranslation('Validation')

  const schema = z.object({
    name: z.string().nonempty(String(t('emptyField'))),
    model: z.string().nonempty(String(t('emptyField'))),
  })

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<AssetFormData>({ resolver: zodResolver(schema) })

  return {
    errors,
    register,
    setValue,
    getValues,
    handleSubmit,
  }
}

export type UseAssetFormReturn = ReturnType<typeof useAssetForm>
