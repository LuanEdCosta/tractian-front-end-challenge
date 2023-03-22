import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { DocumentTitle, PageLayout } from 'src/components'

import { Form } from './components/Form'
import { useSaveAsset } from './hooks/useSaveAsset.hook'
import { useAssetForm } from './hooks/useAssetForm.hook'
import { useFetchAsset } from './hooks/useFetchAsset.hook'
import { AssetFormSkeleton } from './components/AssetFormSkeleton.component'
import { AssetFormPlaceholder } from './components/AssetFormPlaceholder.component'

export function CreateAssetPage() {
  const { t } = useTranslation('CreateAsset')

  const { id } = useParams()
  const isUpdating = !!id
  const title = t(isUpdating ? 'updateTitle' : 'title')

  const { errors, register, setValue, getValues, handleSubmit } = useAssetForm()
  const { data, isError, isFetching } = useFetchAsset(Number(id), isUpdating)
  const { isSaving, handleSave } = useSaveAsset({
    id: Number(id),
    isUpdating,
    getValues,
  })

  useEffect(() => {
    if (data) {
      setValue('unitId', data.unitId)
      setValue('companyId', data.companyId)
      setValue('assignedUserIds', data.assignedUserIds)
      setValue('name', data.name)
      setValue('model', data.model)
      setValue('status', data.status)
      setValue('sensors', data.sensors)
    }
  }, [data, setValue])

  return (
    <PageLayout.Container>
      <DocumentTitle title={title} />

      <PageLayout.Content>
        <PageLayout.Title title={title} backButtonLink=".." />

        {(() => {
          if (isFetching) return <AssetFormSkeleton />
          else if (isError) return <AssetFormPlaceholder />
          return (
            <Form
              errors={errors}
              isSaving={isSaving}
              register={register}
              handleSubmit={handleSubmit}
              handleSave={handleSave}
            />
          )
        })()}
      </PageLayout.Content>
    </PageLayout.Container>
  )
}
