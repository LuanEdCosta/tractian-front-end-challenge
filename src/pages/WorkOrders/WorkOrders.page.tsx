import { useTranslation } from 'react-i18next'

import { useNumberOfPages, usePagination } from 'src/hooks'
import { DocumentTitle, PageLayout } from 'src/components'

import { INITIAL_PAGE, PAGE_SIZE } from './WorkOrders.config'
import { useWorkOrders } from './hooks/useWorkOrders.hook'
import { useFilters } from './hooks/useFilters.hook'
import { useDeleteWorkOrder } from './hooks/useDeleteWorkOrder.hook'
import { useWorkOrderActions } from './hooks/useWorkOrderActions.hook'
import { WorkOrdersTable } from './components/WorkOrdersTable.component'
import { WorkOrdersEmpty } from './components/WorkOrdersEmpty.component'
import { WorkOrderActions } from './components/WorkOrderActions.component'
import { WorkOrdersFilters } from './components/WorkOrdersFilters.component'
import { WorkOrdersSkeleton } from './components/WorkOrdersSkeleton.component'
import { DeleteWorkOrderModal } from './components/DeleteWorkOrderModal.component'
import { WorkOrdersPagination } from './components/WorkOrdersPagination.component'

export function WorkOrdersPage() {
  const { t } = useTranslation('WorkOrders')

  const {
    anchor,
    isDeleteModalOpen,
    handleSetAnchor,
    handleHideAnchor,
    handleOpenDeleteModal,
    handleCloseDeleteModal,
  } = useWorkOrderActions()

  const { page, setPage, handleResetPage } = usePagination(INITIAL_PAGE)

  const { currentFilters, register, handleSubmit, handleSearch } = useFilters({
    handleResetPage,
  })

  const { workOrders, isLoadingWorkOrders, totalWorkOrders } = useWorkOrders(
    { page, pageSize: PAGE_SIZE },
    currentFilters,
  )

  const { numberOfPages } = useNumberOfPages(totalWorkOrders, PAGE_SIZE)

  const { handleDeleteWorkOrder } = useDeleteWorkOrder(anchor?.data.id ?? 0)

  return (
    <PageLayout.Container>
      <DocumentTitle title={t('title')} />

      <WorkOrderActions
        anchor={anchor}
        handleHideAnchor={handleHideAnchor}
        handleOpenDeleteModal={handleOpenDeleteModal}
      />

      <DeleteWorkOrderModal
        isDeleteModalOpen={isDeleteModalOpen}
        handleHideAnchor={handleHideAnchor}
        handleDeleteWorkOrder={handleDeleteWorkOrder}
        handleCloseDeleteModal={handleCloseDeleteModal}
      />

      <PageLayout.Content>
        <PageLayout.Title title={t('title')} />

        <WorkOrdersFilters
          register={register}
          handleSubmit={handleSubmit}
          handleSearch={handleSearch}
        />

        {(() => {
          if (isLoadingWorkOrders) return <WorkOrdersSkeleton />
          else if (workOrders.length === 0) return <WorkOrdersEmpty />
          return (
            <WorkOrdersTable
              workOrders={workOrders}
              handleSetAnchor={handleSetAnchor}
            />
          )
        })()}

        <WorkOrdersPagination
          page={page}
          total={totalWorkOrders}
          pageSize={PAGE_SIZE}
          isLoading={isLoadingWorkOrders}
          numberOfPages={numberOfPages}
          handleChangePage={setPage}
        />
      </PageLayout.Content>
    </PageLayout.Container>
  )
}
