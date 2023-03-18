import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { DocumentTitle, PageLayout } from 'src/components'

import { useAsset } from './hooks/useAsset.hook'
import { AssetDetailsSkeleton } from './components/AssetDetailsSkeleton.component'
import { AssetDetailsOrganizer } from './components/AssetDetailsOrganizer.component'

export function AssetDetailsPage() {
  const { t } = useTranslation(['AssetDetails', 'Common'])
  const { id } = useParams()

  const { asset, isLoadingAsset } = useAsset(id ? Number(id) : 0)

  return (
    <PageLayout.Container>
      <DocumentTitle title={asset?.name || t('defaultTitle')} />

      <PageLayout.Content>
        {(() => {
          if (isLoadingAsset) return <AssetDetailsSkeleton />
          else if (!asset) return null
          return <AssetDetailsOrganizer asset={asset} />
        })()}
      </PageLayout.Content>
    </PageLayout.Container>
  )
}
