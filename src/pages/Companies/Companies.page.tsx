import { useTranslation } from 'react-i18next'

import { useNumberOfPages, usePagination } from 'src/hooks'
import { DocumentTitle, PageLayout } from 'src/components'

import { INITIAL_PAGE, PAGE_SIZE } from './Companies.config'
import { useFilters } from './hooks/useFilters.hook'
import { useCompanies } from './hooks/useCompanies.hook'
import { useDeleteCompany } from './hooks/useDeleteCompany.hook'
import { useCompanyActions } from './hooks/useCompanyActions.hook'
import { CompaniesTable } from './components/CompaniesTable.component'
import { CompaniesEmpty } from './components/CompaniesEmpty.component'
import { CompanyActions } from './components/CompanyActions.component'
import { CompaniesFilters } from './components/CompaniesFilters.component'
import { CompaniesSkeleton } from './components/CompaniesSkeleton.component'
import { DeleteCompanyModal } from './components/DeleteCompanyModal.component'
import { CompaniesPagination } from './components/CompaniesPagination.component'

export function CompaniesPage() {
  const { t } = useTranslation('Companies')

  const {
    anchor,
    isDeleteModalOpen,
    handleSetAnchor,
    handleHideAnchor,
    handleOpenDeleteModal,
    handleCloseDeleteModal,
  } = useCompanyActions()

  const { page, setPage, handleResetPage } = usePagination(INITIAL_PAGE)

  const { currentFilters, register, handleSubmit, handleSearch } = useFilters({
    handleResetPage,
  })

  const { companies, isLoadingCompanies, totalCompanies } = useCompanies(
    { page, pageSize: PAGE_SIZE },
    currentFilters,
  )

  const { numberOfPages } = useNumberOfPages(totalCompanies, PAGE_SIZE)

  const { handleDeleteCompany } = useDeleteCompany(anchor?.data.id ?? 0)

  return (
    <PageLayout.Container>
      <DocumentTitle title={t('title')} />

      <CompanyActions
        anchor={anchor}
        handleHideAnchor={handleHideAnchor}
        handleOpenDeleteModal={handleOpenDeleteModal}
      />

      <DeleteCompanyModal
        isDeleteModalOpen={isDeleteModalOpen}
        handleHideAnchor={handleHideAnchor}
        handleDeleteCompany={handleDeleteCompany}
        handleCloseDeleteModal={handleCloseDeleteModal}
      />

      <PageLayout.Content>
        <PageLayout.Title title={t('title')} />

        <CompaniesFilters
          register={register}
          handleSubmit={handleSubmit}
          handleSearch={handleSearch}
        />

        {(() => {
          if (isLoadingCompanies) return <CompaniesSkeleton />
          else if (companies.length === 0) return <CompaniesEmpty />
          return (
            <CompaniesTable
              companies={companies}
              handleSetAnchor={handleSetAnchor}
            />
          )
        })()}

        <CompaniesPagination
          page={page}
          total={totalCompanies}
          pageSize={PAGE_SIZE}
          isLoading={isLoadingCompanies}
          numberOfPages={numberOfPages}
          handleChangePage={setPage}
        />
      </PageLayout.Content>
    </PageLayout.Container>
  )
}
