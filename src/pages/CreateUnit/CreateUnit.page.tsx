import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { DocumentTitle, PageLayout } from 'src/components'

import { Form } from './components/Form'
import { useSaveUnit } from './hooks/useSaveUnit.hook'
import { useUnitForm } from './hooks/useUnitForm.hook'
import { useFetchUnit } from './hooks/useFetchUnit.hook'
import { UnitFormSkeleton } from './components/UnitFormSkeleton.component'
import { UnitFormPlaceholder } from './components/UnitFormPlaceholder.component'

export function CreateUnitPage() {
  const { t } = useTranslation('CreateUnit')

  const { id } = useParams()
  const isUpdating = !!id
  const title = t(isUpdating ? 'updateTitle' : 'title')

  const { errors, register, setValue, getValues, handleSubmit } = useUnitForm()
  const { data, isError, isFetching } = useFetchUnit(Number(id), isUpdating)
  const { isSaving, handleSave } = useSaveUnit({
    id: Number(id),
    isUpdating,
    getValues,
  })

  useEffect(() => {
    if (data) setValue('name', data.name)
  }, [data, setValue])

  return (
    <PageLayout.Container>
      <DocumentTitle title={title} />

      <PageLayout.Content>
        <PageLayout.Title title={title} backButtonLink="/units" />

        {(() => {
          if (isFetching) return <UnitFormSkeleton />
          else if (isError) return <UnitFormPlaceholder />
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
