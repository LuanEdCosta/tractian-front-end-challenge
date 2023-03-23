import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { DocumentTitle, PageLayout } from 'src/components'

import { Form } from './components/Form'
import { useSaveWorkOrder } from './hooks/useSaveWorkOrder.hook'
import { useWorkOrderForm } from './hooks/useWorkOrderForm.hook'
import { useFetchWorkOrder } from './hooks/useFetchWorkOrder.hook'
import { WorkOrderFormSkeleton } from './components/WorkOrderFormSkeleton.component'
import { WorkOrderFormPlaceholder } from './components/WorkOrderFormPlaceholder.component'

export function CreateWorkOrderPage() {
  const { t } = useTranslation('CreateWorkOrder')

  const { id } = useParams()
  const isUpdating = !!id
  const title = t(isUpdating ? 'updateTitle' : 'title')

  const { errors, register, setValue, getValues, handleSubmit } =
    useWorkOrderForm()

  const { data, isError, isFetching } = useFetchWorkOrder(
    Number(id),
    isUpdating,
  )

  const { isSaving, handleSave } = useSaveWorkOrder({
    id: Number(id),
    isUpdating,
    getValues,
  })

  useEffect(() => {
    if (data) {
      setValue('title', data.title)
      setValue('status', data.status)
      setValue('assetId', data.assetId)
      setValue('priority', data.priority)
      setValue('checklist', data.checklist)
      setValue('description', data.description)
      setValue('assignedUserIds', data.assignedUserIds)
    }
  }, [data, setValue])

  return (
    <PageLayout.Container>
      <DocumentTitle title={title} />

      <PageLayout.Content>
        <PageLayout.Title title={title} backButtonLink="/workOrders" />

        {(() => {
          if (isFetching) return <WorkOrderFormSkeleton />
          else if (isError) return <WorkOrderFormPlaceholder />
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
