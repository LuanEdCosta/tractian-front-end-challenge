import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { DocumentTitle, PageLayout } from 'src/components'

import { Form } from './components/Form'
import { useSaveCompany } from './hooks/useSaveCompany.hook'
import { useCompanyForm } from './hooks/useCompanyForm.hook'
import { useFetchCompany } from './hooks/useFetchCompany.hook'
import { CompanyFormSkeleton } from './components/CompanyFormSkeleton.component'
import { CompanyFormPlaceholder } from './components/CompanyFormPlaceholder.component'

export function CreateCompanyPage() {
  const { t } = useTranslation('CreateCompany')

  const { id } = useParams()
  const isUpdating = !!id
  const title = t(isUpdating ? 'updateTitle' : 'title')

  const { errors, register, setValue, getValues, handleSubmit } =
    useCompanyForm()
  const { data, isError, isFetching } = useFetchCompany(Number(id), isUpdating)
  const { isSaving, handleSave } = useSaveCompany({
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
        <PageLayout.Title title={title} backButtonLink=".." />

        {(() => {
          if (isFetching) return <CompanyFormSkeleton />
          else if (isError) return <CompanyFormPlaceholder />
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
