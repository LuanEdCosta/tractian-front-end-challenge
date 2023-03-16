import { useTranslation } from 'react-i18next'

import { DocumentTitle, PageLayout } from 'src/components'

import { useAssets } from './hooks/useAssets.hook'
import { AssetsTable } from './components/AssetsTable.component'
import { AssetsEmpty } from './components/AssetsEmpty.component'
import { AssetsFilters } from './components/AssetsFilters.component'
import { AssetsSkeleton } from './components/AssetsSkeleton.component'

export function AssetsPage() {
  const { t } = useTranslation('Assets')
  const { assets, isLoadingAssets } = useAssets()

  return (
    <PageLayout.Container>
      <DocumentTitle title={t('title')} />

      <PageLayout.Content>
        <AssetsFilters />

        {(() => {
          if (isLoadingAssets) return <AssetsSkeleton />
          else if (assets.length === 0) return <AssetsEmpty />
          return <AssetsTable assets={assets} />
        })()}
      </PageLayout.Content>
    </PageLayout.Container>
  )
}
