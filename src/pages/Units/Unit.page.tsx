import { useTranslation } from 'react-i18next'

import { useNumberOfPages, usePagination } from 'src/hooks'
import { DocumentTitle, PageLayout } from 'src/components'

import { INITIAL_PAGE, PAGE_SIZE } from './Unit.config'
import { useUnits } from './hooks/useUnit.hook'
import { useFilters } from './hooks/useFilters.hook'
import { useDeleteUnit } from './hooks/useDeleteUnit.hook'
import { useUnitActions } from './hooks/useUnitActions.hook'
import { UnitsTable } from './components/UnitsTable.component'
import { UnitsEmpty } from './components/UnitsEmpty.component'
import { UnitActions } from './components/UnitActions.component'
import { UnitsFilters } from './components/UnitsFilters.component'
import { UnitsSkeleton } from './components/UnitsSkeleton.component'
import { DeleteUnitModal } from './components/DeleteUnitModal.component'
import { UnitsPagination } from './components/UnitsPagination.component'
import { UnitPageActions } from './components/UnitPageActions.component'

export function UnitsPage() {
  const { t } = useTranslation('Units')

  const {
    anchor,
    isDeleteModalOpen,
    handleSetAnchor,
    handleHideAnchor,
    handleOpenDeleteModal,
    handleCloseDeleteModal,
  } = useUnitActions()

  const { page, setPage, handleResetPage } = usePagination(INITIAL_PAGE)

  const { currentFilters, register, handleSubmit, handleSearch } = useFilters({
    handleResetPage,
  })

  const { units, isLoadingUnits, totalUnits } = useUnits(
    { page, pageSize: PAGE_SIZE },
    currentFilters,
  )

  const { numberOfPages } = useNumberOfPages(totalUnits, PAGE_SIZE)

  const { handleDeleteUnit } = useDeleteUnit(anchor?.data.id ?? 0)

  return (
    <PageLayout.Container>
      <DocumentTitle title={t('title')} />

      <UnitActions
        anchor={anchor}
        handleHideAnchor={handleHideAnchor}
        handleOpenDeleteModal={handleOpenDeleteModal}
      />

      <DeleteUnitModal
        isDeleteModalOpen={isDeleteModalOpen}
        handleHideAnchor={handleHideAnchor}
        handleDeleteUnit={handleDeleteUnit}
        handleCloseDeleteModal={handleCloseDeleteModal}
      />

      <PageLayout.Content>
        <PageLayout.Title title={t('title')}>
          <UnitPageActions />
        </PageLayout.Title>

        <UnitsFilters
          register={register}
          handleSubmit={handleSubmit}
          handleSearch={handleSearch}
        />

        {(() => {
          if (isLoadingUnits) return <UnitsSkeleton />
          else if (units.length === 0) return <UnitsEmpty />
          return <UnitsTable units={units} handleSetAnchor={handleSetAnchor} />
        })()}

        <UnitsPagination
          page={page}
          total={totalUnits}
          pageSize={PAGE_SIZE}
          isLoading={isLoadingUnits}
          numberOfPages={numberOfPages}
          handleChangePage={setPage}
        />
      </PageLayout.Content>
    </PageLayout.Container>
  )
}
