import { Stack } from '@mui/material'
import { useTranslation } from 'react-i18next'

import {
  DataGroup,
  TextWithCaption,
  AssetStatusPresenter,
} from 'src/components'

import { UseAssetReturn } from '../hooks/useAsset.hook'

import { AssetImage } from './AssetImage.component'

type AssetDetailsPanelProps = RequiredProperty<Pick<UseAssetReturn, 'asset'>>

export function AssetDetailsPanel({ asset }: AssetDetailsPanelProps) {
  const { t } = useTranslation('AssetDetails')

  return (
    <DataGroup title={t('panel.title')}>
      <Stack spacing={2}>
        <AssetImage alt={asset.name} url={asset.image} />

        <Stack spacing={1}>
          <TextWithCaption
            caption={t('panel.status')}
            text={<AssetStatusPresenter status={asset.status} />}
          />

          <TextWithCaption caption={t('panel.name')} text={asset.name} />
          <TextWithCaption caption={t('panel.model')} text={asset.model} />

          <TextWithCaption
            caption={t('panel.healthScore')}
            text={`${asset.healthscore}%`}
          />

          <TextWithCaption
            caption={t('panel.sensors')}
            text={asset.sensors.join(', ')}
          />

          <TextWithCaption
            caption={t('panel.maxTemp')}
            text={`${asset.specifications.maxTemp}º`}
          />

          {!!asset.specifications.rpm && (
            <TextWithCaption
              caption={t('panel.rpm')}
              text={asset.specifications.rpm}
            />
          )}

          {!!asset.specifications.power && (
            <TextWithCaption
              caption={t('panel.power')}
              text={`${asset.specifications.power} kWh`}
            />
          )}
        </Stack>
      </Stack>
    </DataGroup>
  )
}
