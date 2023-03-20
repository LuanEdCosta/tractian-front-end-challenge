import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { DocumentTitle, PageLayout } from 'src/components'

import { Form } from './components/Form'
import { useSaveUser } from './hooks/useSaveUser.hook'
import { useUserForm } from './hooks/useUserForm.hook'
import { useFetchUser } from './hooks/useFetchUser.hook'
import { UserFormSkeleton } from './components/UserFormSkeleton.component'
import { UserFormPlaceholder } from './components/UserFormPlaceholder.component'

export function CreateUserPage() {
  const { t } = useTranslation('CreateUser')

  const { id } = useParams()
  const isUpdating = !!id
  const title = t(isUpdating ? 'updateTitle' : 'title')

  const { errors, register, setValue, getValues, handleSubmit } = useUserForm()
  const { data, isError, isFetching } = useFetchUser(Number(id), isUpdating)
  const { isSaving, handleSave } = useSaveUser({
    id: Number(id),
    isUpdating,
    getValues,
  })

  useEffect(() => {
    if (data) {
      setValue('name', data.name)
      setValue('email', data.email)
    }
  }, [data, setValue])

  return (
    <PageLayout.Container>
      <DocumentTitle title={title} />

      <PageLayout.Content>
        <PageLayout.Title title={title} backButtonLink=".." />

        {(() => {
          if (isFetching) return <UserFormSkeleton />
          else if (isError) return <UserFormPlaceholder />
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
