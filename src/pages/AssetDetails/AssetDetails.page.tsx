import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

import { DocumentTitle, PageLayout } from 'src/components'

import { useAsset } from './hooks/useAsset.hook'
import { AssetDetailsError } from './components/AssetDetailsError.component'
import { AssetDetailsActions } from './components/AssetDetailsActions.component'
import { AssetDetailsSkeleton } from './components/AssetDetailsSkeleton.component'
import { AssetDetailsOrganizer } from './components/AssetDetailsOrganizer.component'

export function AssetDetailsPage() {
  const { t } = useTranslation(['AssetDetails', 'Common', 'Glossary'])
  const { id = '0' } = useParams()

  const { asset, isLoadingAsset } = useAsset(Number(id))
  const title = asset?.name || t('defaultTitle').toString()

  return (
    <PageLayout.Container>
      <DocumentTitle title={title} />

      <PageLayout.Content>
        <PageLayout.Title title={title} backButtonLink="..">
          {asset && <AssetDetailsActions id={id} />}
        </PageLayout.Title>

        {(() => {
          if (isLoadingAsset) return <AssetDetailsSkeleton />
          else if (!asset) return <AssetDetailsError />
          return <AssetDetailsOrganizer asset={asset} />
        })()}
      </PageLayout.Content>
    </PageLayout.Container>
  )
}
