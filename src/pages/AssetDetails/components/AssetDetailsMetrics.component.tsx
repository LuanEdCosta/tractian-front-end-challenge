import { Grid } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { CalendarMonth, Numbers, Schedule } from '@mui/icons-material'

import { DateUtils } from 'src/utils'
import { DataGroup } from 'src/components'

import { UseAssetReturn } from '../hooks/useAsset.hook'

import { MetricsCard } from './MetricsCard.component'

type AssetDetailsMetricsProps = RequiredProperty<Pick<UseAssetReturn, 'asset'>>

export function AssetDetailsMetrics({ asset }: AssetDetailsMetricsProps) {
  const { t } = useTranslation('AssetDetails')

  return (
    <DataGroup title={t('metrics.title')}>
      <Grid mx="-1rem !important" alignItems="stretch" spacing={2} container>
        <Grid xs={12} sm={12} md={6} item>
          <MetricsCard
            IconComponent={Schedule}
            title={t('metrics.totalUptime')}
            value={`${asset.metrics.totalUptime.toFixed(2)}h`}
          />
        </Grid>

        <Grid xs={12} sm={12} md={6} item>
          <MetricsCard
            IconComponent={Numbers}
            title={t('metrics.totalCollectsUptime')}
            value={asset.metrics.totalCollectsUptime}
          />
        </Grid>

        <Grid xs={12} sm={12} md={12} item>
          <MetricsCard
            IconComponent={CalendarMonth}
            title={t('metrics.lastUptimeAt')}
            value={DateUtils.format(
              new Date(asset.metrics.lastUptimeAt),
              'dd/MM/yyyy HH:mm:ss',
            )}
          />
        </Grid>
      </Grid>
    </DataGroup>
  )
}
