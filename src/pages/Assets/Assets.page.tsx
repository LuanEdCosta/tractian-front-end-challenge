import { useTranslation } from 'react-i18next'

import { useNumberOfPages, usePagination } from 'src/hooks'
import { DocumentTitle, PageLayout } from 'src/components'

import { INITIAL_PAGE, PAGE_SIZE } from './Assets.config'
import { useAssets } from './hooks/useAssets.hook'
import { useFilters } from './hooks/useFilters.hook'
import { useDeleteAsset } from './hooks/useDeleteAsset.hook'
import { useAssetActions } from './hooks/useAssetActions.hook'
import { AssetsTable } from './components/AssetsTable.component'
import { AssetsEmpty } from './components/AssetsEmpty.component'
import { AssetActions } from './components/AssetActions.component'
import { AssetsFilters } from './components/AssetsFilters.component'
import { AssetsSkeleton } from './components/AssetsSkeleton.component'
import { DeleteAssetModal } from './components/DeleteAssetModal.component'
import { AssetsPagination } from './components/AssetsPagination.component'
import { AssetsPageActions } from './components/AssetsPageActions.component'

export function AssetsPage() {
  const { t } = useTranslation('Assets')

  const {
    anchor,
    isDeleteModalOpen,
    handleSetAnchor,
    handleHideAnchor,
    handleOpenDeleteModal,
    handleCloseDeleteModal,
  } = useAssetActions()

  const { page, setPage, handleResetPage } = usePagination(INITIAL_PAGE)

  const { currentFilters, register, handleSubmit, handleSearch } = useFilters({
    handleResetPage,
  })

  const { assets, isLoadingAssets, totalAssets } = useAssets(
    { page, pageSize: PAGE_SIZE },
    currentFilters,
  )

  const { numberOfPages } = useNumberOfPages(totalAssets, PAGE_SIZE)

  const { handleDeleteAsset } = useDeleteAsset(anchor?.data.id ?? 0)

  return (
    <PageLayout.Container>
      <DocumentTitle title={t('title')} />

      <AssetActions
        anchor={anchor}
        handleHideAnchor={handleHideAnchor}
        handleOpenDeleteModal={handleOpenDeleteModal}
      />

      <DeleteAssetModal
        isDeleteModalOpen={isDeleteModalOpen}
        handleHideAnchor={handleHideAnchor}
        handleDeleteAsset={handleDeleteAsset}
        handleCloseDeleteModal={handleCloseDeleteModal}
      />

      <PageLayout.Content>
        <PageLayout.Title title={t('title')}>
          <AssetsPageActions />
        </PageLayout.Title>

        <AssetsFilters
          register={register}
          handleSubmit={handleSubmit}
          handleSearch={handleSearch}
        />

        {(() => {
          if (isLoadingAssets) return <AssetsSkeleton />
          else if (assets.length === 0) return <AssetsEmpty />
          return (
            <AssetsTable assets={assets} handleSetAnchor={handleSetAnchor} />
          )
        })()}

        <AssetsPagination
          page={page}
          total={totalAssets}
          pageSize={PAGE_SIZE}
          isLoading={isLoadingAssets}
          numberOfPages={numberOfPages}
          handleChangePage={setPage}
        />
      </PageLayout.Content>
    </PageLayout.Container>
  )
}
