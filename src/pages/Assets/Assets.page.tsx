import { useTranslation } from 'react-i18next'

import { DocumentTitle, PageLayout } from 'src/components'

import { useAssets } from './hooks/useAssets.hook'
import { useDeleteAsset } from './hooks/useDeleteAsset.hook'
import { useAssetActions } from './hooks/useAssetActions.hook'
import { AssetsTable } from './components/AssetsTable.component'
import { AssetsEmpty } from './components/AssetsEmpty.component'
import { AssetActions } from './components/AssetActions.component'
import { AssetsFilters } from './components/AssetsFilters.component'
import { AssetsSkeleton } from './components/AssetsSkeleton.component'
import { DeleteAssetModal } from './components/DeleteAssetModal.component'

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

  const { assets, isLoadingAssets } = useAssets()
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
        <PageLayout.Title title={t('title')} />

        <AssetsFilters />

        {(() => {
          if (isLoadingAssets) return <AssetsSkeleton />
          else if (assets.length === 0) return <AssetsEmpty />

          return (
            <AssetsTable assets={assets} handleSetAnchor={handleSetAnchor} />
          )
        })()}
      </PageLayout.Content>
    </PageLayout.Container>
  )
}
